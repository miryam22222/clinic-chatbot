
const MyCheckBoxList = [
    {
        order: 0,
        name: "Angular"
    },
    {
        order: 1,
        name: "React"
    },
    {
        order: 2,
        name: "Java"
    },
    {
        order: 4,
        name: "Python"
    },
    {
        order: 3,
        name: "JavaScript"
    }
];
export default function Checkbox({ obj, onChange }) {
    return (
        <>
            <input
                type="checkbox"
                id={`custom-checkbox-${obj.index}`}
                name={obj.name}
                value={obj.checked}
                onChange={() => onChange({ ...obj, checked: !obj.checked })}
            />
            {obj.name}
        </>
    );
}