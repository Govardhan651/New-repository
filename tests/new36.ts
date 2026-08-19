class ReusableMethods {
  ElementClick(locator: string): void;
  ElementClick(locator: string, timeout: number): void;

  ElementClick(locator: string, timeout?: number): void {
    if (timeout) {
      console.log(`add time`);
    } else {
      console.log(`clicking on the element ${locator}`);
    }
  }
}

const rm = new ReusableMethods();
rm.ElementClick("#username");
rm.ElementClick("#username" , 2000)
