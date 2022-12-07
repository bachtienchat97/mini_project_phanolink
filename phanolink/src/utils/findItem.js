export function findItem (numberPath ,categoriesList) {
  let result = categoriesList.find(
    (el) => el.id === Number(numberPath)
    );
  return result;
}