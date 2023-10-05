"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Transaction from '@/models/Transaction'
import ListTransaction from '@/models/ListTransaction'
import { FaTrash } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import FrameCard from './components/framecard/FrameCard'
import AllDashCard from './components/alldashcard/AllDashCard'

const listTransaction = new ListTransaction()

function Finances() {
  // Inputs
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  // Edição
  const [flag, setFlag] = useState(0);
  const [editButton, setEditButton] = useState(false);

  // Dados da classe
  const [list, setList] = useState(listTransaction.getAllTransactions());
  const [balance, setBalance] = useState(listTransaction.balance);
  const [revenues, setRevenues] = useState(listTransaction.revenues);
  const [expenses, setExpenses] = useState(listTransaction.expenses);

  const attValue = () => {
    setList(listTransaction.getAllTransactions());
    setBalance(listTransaction.balance);
    setRevenues(listTransaction.revenues);
    setExpenses(listTransaction.expenses);
  }
  
  console.log(list)
  // Adicionar Receita
  const addRevenue = () => {
    console.log("Adicionou a receita");

    const transaction = new Transaction(description, value, "Receita");
    console.log(transaction);

    listTransaction.addTransaction(transaction);

    attValue();

    setDescription('');
    setValue('');
  }

  // Adicionar Despesa
  const addExpense = () => {
    console.log("Adicionou a despesa");

    const transaction = new Transaction(description, value, "Despesa");
    console.log(transaction);

    listTransaction.addTransaction(transaction);

    attValue();

    setDescription('');
    setValue('');
  }

  // Excluir
  const exclude = (id) => {
    const transaction = listTransaction.getAllTransactions();

    if (transaction) {
      listTransaction.deleteTransaction(id);
      attValue();
    }

    console.log("Deu certo!");
  }

  // Editar 
  const edit = (id) => {
    const transaction = listTransaction.getTransactionById(id);

    if (transaction) {
      setDescription(transaction.description);
      setValue(transaction.value);

      setFlag(id);
      setEditButton(true);
    }
  }

  // Atualizar
  const att = () => {
    listTransaction.updateTransaction(flag, description, value)

    setDescription('');
    setValue('');

    attValue();
    setEditButton(false);
    setFlag(0);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <p className={styles.welcome}>Olá, Lívia</p>
          <p className={styles.useremail}>liviaxxsouza@gmail.com</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainheader}>
          <p className={styles.title}>Dashboard</p>
          <div className={styles.transaction}>
            <div className={styles.description}>
              <input
                className={styles.inputdescription}
                value={description}
                type="text"
                name='description'
                placeholder='Descrição'
                onChange={(e) => setDescription(e.target.value)}
              />
              <input className={styles.inputdescription} value={value} type="number" name='description' placeholder='Valor (R$)' onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className={styles.type}>
              {
                editButton ? (
                  <button className={styles.buttonAtualizar} onClick={att}>Atualizar</button>
                ) : (
                  <>
                    <button className={styles.buttonreceita} onClick={addRevenue} >Receita</button>
                    <button className={styles.buttondespesa} onClick={addExpense}>Despesa</button>
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className={styles.infos}>
          <AllDashCard typeBalance={balance} typeRevenues={revenues} typeExpenses={expenses}/>
        </div>

        <div className={styles.registros}>
          <FrameCard title={"Despesas Registradas"} list={list} type={"Despesa"} color={'#e09f9f'} buttonDelete={<FaTrash/>} typeButtonDelete={exclude} buttonEdit={<FaPen/>} typeButtonEdit={edit}/>
          <FrameCard title={"Receitas Registradas"} list={list} type={"Receita"} color={'#9fe0b1'} buttonDelete={<FaTrash/>} typeButtonDelete={exclude} buttonEdit={<FaPen/>} typeButtonEdit={edit}/>

        </div>

      </div>
    </>
  )
}

export default Finances;