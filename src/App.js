import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import Notes from "./components/Notes"
import Table from "./components/Table"
import { useState, useRef } from "react"
import TableForm from "./components/TableForm"
import ReactToPrint from "react-to-print"

export default function App() {

  const [showInvoice, SetShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const componentRef = useRef()
  return (
    <>
      <main className="m-5  p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {
          showInvoice ? (
            <>
              <ReactToPrint trigger={() => <button className=" mt-5 ml-5 bg-blue-500 py-2 px-8 rounded shadow text-white border-2 border-blue-500 font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print/Download</button>} content={() => componentRef.current} />

              <div ref={componentRef} className="p-5">
                <Header />
                <MainDetails name={name} address={address} />
                <ClientDetails clientName={clientName} clientAddress={clientAddress} />
                <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
                <Table description={description} quantity={quantity} amount={amount} price={price} list={list} setList={setList} total={total} setTotal={setTotal} />
                <Notes notes={notes} />
                <Footer name={name} address={address} email={email} website={website} phone={phone} bankAccount={bankAccount} bankName={bankName} />
                <button onClick={() => SetShowInvoice(false)} className=" mt-5 bg-blue-500 py-2 px-8 rounded shadow text-white border-2 border-blue-500 font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
              </div>
            </>) : (
            <>
              <div className="m-5 p-5 bg-white rounded-xl shadow-md md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Invoice Form</h2>

                <label htmlFor="name" className="text-gray-700 font-medium">Your Name</label>
                <input
                  type="text"
                  name="text"
                  id="name"
                  placeholder="John Doe"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="address" className="text-gray-700 font-medium">Your Address</label>
                <input
                  type="text"
                  name="text"
                  id="address"
                  placeholder="123 Main St"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="website" className="text-gray-700 font-medium">Website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="https://example.com"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />

                <label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="(123) 456-7890"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label htmlFor="bankName" className="text-gray-700 font-medium">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Your Bank"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />

                <label htmlFor="bankAccount" className="text-gray-700 font-medium">Bank Account Number</label>
                <input
                  type="text"
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Account Number"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                />

                <label htmlFor="clientName" className="text-gray-700 font-medium">Client's Name</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Client Name"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <label htmlFor="clientAddress" className="text-gray-700 font-medium">Client's Address</label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Client Address"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />

                <label htmlFor="invoiceDate" className="text-gray-700 font-medium">Invoice Date</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
                <label htmlFor="invoiceNumber" className="text-gray-700 font-medium">Invoice Number</label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="INV-00123"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />

                <label htmlFor="dueDate" className="text-gray-700 font-medium">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  autoComplete="off"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />

                {/* this is table data */}
                <article>
                  <TableForm description={description}
                    setDescription={setDescription}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    price={price}
                    setPrice={setPrice}
                    amount={amount}
                    setAmount={setAmount}
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}


                  />
                </article>





                <label htmlFor="notes" className="text-gray-700 font-medium">Additional Notes</label>
                <textarea
                  name="notes"
                  id="notes"
                  cols="30"
                  rows="4"
                  placeholder="Additional notes for the Client"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>



                <button
                  onClick={() => SetShowInvoice(true)}
                  className="bg-teal-400 py-3 px-8 rounded-md shadow-md text-white font-semibold hover:bg-teal-500 transition-all ease-in-out duration-200"
                >
                  Preview Invoice
                </button>
              </div>



            </>
          )
        }
      </main>
    </>

  )
}
