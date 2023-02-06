# Wolt Delivery Fee Calculator

The project includes a UI to calculate Delivery Fee based on the logic mentioned 
in the [assignment page](https://github.com/woltapp/engineering-summer-intern-2023#specification)

## Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The entire details for running and testing is the same as mentioned in it's page.

## Technical Details

- There is a main calculator function `calcultorDeliveryFee.ts` which uses some of sub-calculator functions to process the whole 
conditions and corners of a delivery fee. For example, calculating the distance fee would be done in `getCartFee.ts`

- All of the calculator functions are located in `utils` folder.

- The cart value could be zero in UI (as it could be possible to have free items in cart or a voucher used)

- The number of items could not reasonably be zero because if there is no item inside of the cart, there
is no need to be delivered, but in UI and the conditional logic, there is a checking to make sure,
no problem will come up in case the user enters zero for the mentioned property. Also, an error would be
displayed under the number of items TextField.

- Filling up the whole fields are mandatory in UI, so in case the user do not enter any of them,
a proper message would be shown under the form.

