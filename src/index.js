import {inputBtns, clearBtn } from "./variables";
import {
  sendNumberValue,
  addDecimal,
  useOperator,
  resetAll
} from './view';


inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});


clearBtn.addEventListener('click', resetAll);
