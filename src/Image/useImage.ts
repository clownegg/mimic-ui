import { onMounted, ref, watch } from 'vue';

export const useImage = (imageSrc: string) => {
  const loading = ref(true);
  const error = ref(false);

  const loadImage = () => {
    loading.value = true;
    error.value = false;

    const handleLoad = () => {
      loading.value = false;
      error.value = false;
    };

    const handleError = () => {
      loading.value = false;
      error.value = true;
    };

    const image = new Image();
    image.onload = () => handleLoad();
    image.onerror = () => handleError();
    image.src = imageSrc;
  };

  watch(
    () => imageSrc,
    () => {
      loadImage();
    }
  );

  onMounted(() => {
    loadImage();
  });

  return {
    loading,
    error,
  };
};
