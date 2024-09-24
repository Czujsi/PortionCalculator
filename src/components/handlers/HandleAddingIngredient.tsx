import { Ingredient } from "../IngredientPattern/IngredientPatternInterface";

export function HandleAddingNewIngredient(newIngredient: Ingredient, setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>, ingredients: Ingredient[], setNewIngredient: React.Dispatch<React.SetStateAction<Ingredient>>) {
    return () => {
        if (newIngredient.name && newIngredient.quantity && newIngredient.unit) {
            setIngredients([...ingredients, newIngredient]);
            setNewIngredient({ name: "", quantity: 0, unit: "" });
        }
    };
}