let num = 0;
async function increment() {
  num += await 2;
  console.log(num);
}
increment();
num += 1;
console.log(num);
/****
 * What is the resulting output?
 *  2, 3
 *  1, 3
 *  1, 2 CORRECT // Se recorre todo el codigo, se establece num = 1, y despues se ejecuta el await (que habia hecho un clousure con num = 0)
 *  2, 1
 */
