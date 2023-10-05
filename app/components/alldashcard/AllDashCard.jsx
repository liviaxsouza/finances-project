import DashCard from "./../dashcard/DashCard"

const AllDashCard = ( {typeBalance, typeRevenues, typeExpenses} ) => {
    <>
        <DashCard title={"Saldo"} value={{typeBalance}} color={'#9fc7e0'} />
        <DashCard title={"Receitas"} value={{typeRevenues}} color={'#9fe0b1'} />
        <DashCard title={"Despesas"} value={{typeExpenses}} color={'#e09f9f'} />
    </>
}

export default AllDashCard;