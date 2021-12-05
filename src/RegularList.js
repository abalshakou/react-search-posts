export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
    })=> {
    return (
            <>
            { items && !!items.length && items.map((item,i) => (
            <ItemComponent key={i} {...{[resourceName]:item}} />
            ))}
            </>
    ) }
