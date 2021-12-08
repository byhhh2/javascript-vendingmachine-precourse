import { getMenuButtons, getManagers } from '../domElement.js';
import { BLOCK, NONE, CLICK } from '../../constants.js';

export const addListenerToMenuButton = () => {
  const menuButtons = getMenuButtons();
  const managers = getManagers();

  menuButtons.forEach((button, index) => {
    button.addEventListener(CLICK, () => {
      showOrHideManager(managers, index + 1);
    });
  });
};

const showOrHideManager = (managers, num) => {
  managers.forEach((manager) => {
    if (Number(manager.dataset.num) === num) {
      manager.style.display = BLOCK;
    } else {
      manager.style.display = NONE;
    }
  });
};
