
const setNavListeners = () => {
  const navItems = document.querySelectorAll('.navItem');
  const navItemArray = [...navItems];

  const navListeners = document.querySelectorAll('.navListItem');
  const listItemArray = [...navListeners];

  navItemArray.forEach((navItem) => {
    navItem.addEventListener('click', revealNavList);
    navItem.addEventListener('mouseover', hoverRevealNavList);
  })

  return {
    navListeners,
    listItemArray,
  }
}

const revealNavList = (event) => {
  console.log('click');
  const navItem = navElements.get(event).navItem;
  const navSelector = navElements.get(event).navSelector;
  const navList = navElements.get(event).navList;
  const navListItemsArray = navElements.get(event).navListItemsArray;
  const content = navElements.get(event).content;

  navSelector.classList.remove('contentsHidden');
  navSelector.classList.add('contentsVisible');
  navItem.classList.remove('contentsHidden');
  navItem.classList.add('contentsVisible');
  navList.classList.remove('hidden');
  navList.classList.add('visible');
  
  navListItemsArray.forEach((listItem) => {
    listItem.classList.remove('hidden');
    listItem.classList.add('visible');
  })
  
  navSelector.removeEventListener('mouseleave', hideNavList);
  navItem.removeEventListener('mouseover', hoverRevealNavList);
  navItem.removeEventListener('click', revealNavList);
  navItem.addEventListener('click', hideNavList);
  content.addEventListener('click', hideNavList);
}

const hideNavList = (event) => {
  const navItem = navElements.get(event).navItem;
  const navSelector = navElements.get(event).navSelector;
  const navList = navElements.get(event).navList;
  const navListItemsArray = navElements.get(event).navListItemsArray;
  const content = navElements.get(event).content;

  navSelector.classList.remove('contentsVisible');
  navSelector.classList.add('contentsHidden');
  navItem.classList.remove('contentsVisible');
  navItem.classList.add('contentsHidden');
  navList.classList.remove('visible');
  navList.classList.add('hidden');
  navList.classList.remove('visible');
  navList.classList.add('hidden');

  navListItemsArray.forEach((listItem) => {
    listItem.classList.remove('visible');
    listItem.classList.add('hidden');
  })
  
  navSelector.removeEventListener('mouseleave', hideNavList);
  navItem.removeEventListener('click', hideNavList);
  content.removeEventListener('click', hideNavList);
  navItem.addEventListener('click', revealNavList);
  navItem.addEventListener('mouseover', hoverRevealNavList);
}

const hoverRevealNavList = (event) => {
  console.log('hover');
  const navItem = navElements.get(event).navItem;
  const navSelector = navElements.get(event).navSelector;
  const navList = navElements.get(event).navList;
  const navListItemsArray = navElements.get(event).navListItemsArray;
  const content = navElements.get(event).content;

  navSelector.classList.remove('contentsHidden');
  navSelector.classList.add('contentsVisible');
  navItem.classList.remove('contentsHidden');
  navItem.classList.add('contentsVisible');
  navList.classList.remove('hidden');
  navList.classList.add('visible');
  
  navListItemsArray.forEach((listItem) => {
    listItem.classList.remove('hidden');
    listItem.classList.add('visible');
  })

  navItem.removeEventListener('mouseover', hoverRevealNavList);
  navSelector.addEventListener('mouseleave', hideNavList);
}


const navElements =(() => {
  const get = (event) => {
    let navItem = event.target;
    if (navItem.id === 'header') {
      navItem = navItem.querySelector('.navItem');
    }
    if (navItem.classList.contains('navListItem')) {
      navItem = navItem.parentNode.querySelector('.navItem');
    }
    if (navItem.classList.contains('navSelector')) {
      navItem = navItem.querySelector('.navItem');
    }
    if (navItem.id === 'content') {
      navItem = document.querySelector('.navItem.contentsVisible');
    }
    
    const navSelector = navItem.parentNode;
    const navList = navSelector.querySelector('.navList');
    const navListItems = navSelector.querySelectorAll('.navListItem');
    const navListItemsArray = [...navListItems];
    const content = document.getElementById('content');

    return {
      navItem,
      navSelector,
      navList,
      navListItems,
      navListItemsArray,
      content,
    }
  }
  return {
    get,
  }
  
})();






export default { setNavListeners } 