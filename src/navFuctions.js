
const setNavListeners = () => {
  const navListeners = document.querySelectorAll('.navListItem');
  const listItemArray = [...navListeners];
  console.log(navListeners);

  return {
    navListeners,
    listItemArray,
  }
}




export default { setNavListeners } 