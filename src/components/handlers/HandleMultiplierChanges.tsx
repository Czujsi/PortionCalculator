export function HandleMultiplierChanges(setMultiplier: React.Dispatch<React.SetStateAction<number>>) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        setMultiplier(Number(e.target.value));
    };
}