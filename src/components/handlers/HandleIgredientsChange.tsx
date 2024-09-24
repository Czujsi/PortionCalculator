import { Ingredient } from "../IngredientPattern/IngredientPatternInterface";

export function handleSettingNewIngredient(setNewIngredient: React.Dispatch<React.SetStateAction<Ingredient>>) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewIngredient((prev) => ({
            ...prev,
            [name]: name === "quantity" ? Number(value) : value,
        }));
    };
}