
export const Page1 = () => {
    return (
        <div>
            <h3 style={{textAlign: 'center', color: 'white'}}>Choose your sex at birth</h3>
            <div style={{ display: 'grid', justifyContent: 'center' }}>
                <button
                    style={{
                        width: '150px',
                        height: '50px',
                        fontSize: '20px',
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        marginBottom: '20px',
                        cursor: 'pointer'
                    }}
                >
                    Female
                </button>
                <button
                    style={{
                        width: '150px',
                        height: '50px',
                        fontSize: '20px',
                        background: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        marginBottom: '20px',
                        cursor: 'pointer'
                    }}
                >
                    Male
                </button>
            </div>
        </div>
    )
} 