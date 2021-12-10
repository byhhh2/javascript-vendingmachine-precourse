import { vendingMachine } from '../../index.js';
import {
  getVendingMachineChargeAmount,
  getVendingMachineCoinTableData,
} from '../domElement.js';
import { COINS } from '../../constants.js';

const updateVendingMachineChargeAmount = () => {
  const vendingMachineChargeAmount = getVendingMachineChargeAmount();

  vendingMachineChargeAmount.innerHTML = vendingMachine.amount;
};

const updateVendingMachineTable = () => {
  const vendingMachineCoinTableData = getVendingMachineCoinTableData();

  COINS.forEach((coin) => {
    vendingMachineCoinTableData[
      coin
    ].innerHTML = `${vendingMachine.coins[coin]}개`;
  });
};

export const updateVendingMachineCharge = () => {
  updateVendingMachineChargeAmount();
  updateVendingMachineTable();
};
