import { calculate } from "../calculations/QuantityCalculation";
import { Ingredient } from "../IngredientPattern/IngredientPatternInterface";

export function HandleQuantityCalculations(ingredients: Ingredient[], multiplier: number, setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>) {
    return () => {
        try {
            const quantities = ingredients.map(ingredient => ingredient.quantity);

            const newQuantities = calculate(quantities, multiplier);

            const updatedIngredients = ingredients.map((ingredient, index) => ({
                ...ingredient,
                quantity: newQuantities[index],
            }));

            setIngredients(updatedIngredients);
        } catch (error) {
            console.error();
        }
    };
}