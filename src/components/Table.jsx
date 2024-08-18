function Table({data, config, FnKey}) {
    const renderedHeaders = config.map(column => {
        return (
            <th key={column.label} className="px-2">{column.label}</th>
        )
    })

    const renderedRows = data.map(rowData => {
        const  renderedCells = config.map(column => {
            return <td key={column.name} className="py-2">{column.render(rowData)}</td>
        });

        return (
            <tr key={rowData.name} className="border-b">
                {renderedCells}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table