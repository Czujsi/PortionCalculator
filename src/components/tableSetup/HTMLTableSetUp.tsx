import { Ingredient } from "../IngredientPattern/IngredientPatternInterface";

export function HTMLTable(ingredients: Ingredient[], newIngredient: Ingredient, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleAddIngredient: () => void, multiplier: number, handleMultiplierChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleCalculate: () => void): React.ReactNode {
    return <div>
        <h2>Składniki</h2>
        <table>
            <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                    <th>Jednostka</th>
                </tr>
            </thead>
            <tbody>
                {ingredients.map((ingredient, index) => (
                    <tr key={index}>
                        <td>{ingredient.name}</td>
                        <td>{ingredient.quantity}</td>
                        <td>{ingredient.unit}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div>
            <h3>Dodaj nowy składnik</h3>
            <input
                type="text"
                name="name"
                value={newIngredient.name}
                placeholder="Nazwa"
                onChange={handleChange} />
            <input
                type="number"
                name="quantity"
                value={newIngredient.quantity}
                placeholder="Ilość"
                onChange={handleChange} />
            <input
                type="text"
                name="unit"
                value={newIngredient.unit}
                placeholder="Jednostka (g, ml, szt.)"
                onChange={handleChange} />
            <button onClick={handleAddIngredient}>+</button>
        </div>

        <div>
            <h3>Oblicz</h3>
            <input
                type="number"
                value={multiplier}
                onChange={handleMultiplierChange}
                placeholder="Mnożnik" />
            <button onClick={handleCalculate}>Oblicz</button>
        </div>
    </div>;
}