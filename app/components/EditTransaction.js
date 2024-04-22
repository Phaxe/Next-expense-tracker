



export const EditTransaction = () => {



  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  />
        </div>
        <button className="btn">Update transaction</button>
      </form>
    </>
  )
}
