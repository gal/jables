const isError = document.getElementById("is-error");

const testFeature = () => {
  if (window === undefined) {
    throw new Error("window is undefined");
  }

  if (window.ai === undefined) {
    throw new Error("window.ai is undefined");
  }
};

try {
  testFeature();
  isError.innerHTML = "enabled";
} catch (e) {
  isError.innerHTML = "not enabled";
  console.error(e);
}
