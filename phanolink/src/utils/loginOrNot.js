
export const loginOrNot = function (userStorage,userStore) {
    const modal = document.getElementById("modal-1");
  if (userStore.name == undefined && userStorage == null) {
    if (userStore.name == undefined || userStorage == null) {
      return {
        wd: window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        }),
        md: (modal.style.display = "block"),
      };
    }
  }
};
