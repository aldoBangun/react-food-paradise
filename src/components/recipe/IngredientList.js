const IngredientList = ({ ingredients = [] }) => {
  return (
    <div className="mb-5">
      <h4 className="mb-3">Ingredients</h4>
      {ingredients?.length ? (
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-secondary">No Ingredients</p>
      )}

    </div>
  )
}

export default IngredientList
