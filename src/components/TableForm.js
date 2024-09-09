import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

function TableForm({ description, setDescription, amount, setAmount, price, setPrice, quantity, setQuantity, list, setList, total, setTotal }) {
    const [isEditing, setIsEditing] = useState(false);

    // Function to calculate amount based on price and quantity
    const calculateAmount = () => {
        if (quantity && price) {
            setAmount((quantity * price).toFixed(2)); // Calculate and format amount with 2 decimal places
        } else {
            setAmount('');
        }
    };

    // Use useEffect to recalculate amount whenever quantity or price changes
    useEffect(() => {
        calculateAmount();
    }, [quantity, price]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description && ! quantity && ! price) {
            alert("please fill in all inputs!")

        } else {
            const newItem = {
                id: uuidv4(),
                description,
                quantity,
                price,
                amount
            };

            // Add new item to the list and reset state
            setList([...list, newItem]);
            setIsEditing(false);
            setDescription('');
            setQuantity('');
            setPrice('');
            setAmount('');

        }


    };

    // Calculate Total when the list changes
    useEffect(() => {
        const sum = list.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);
        setTotal(sum.toFixed(2));
    }, [list, setTotal]);

    // Edit Button
    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id);
        setList(list.filter((row) => row.id !== id));
        setIsEditing(true);
        setDescription(editingRow.description);
        setQuantity(editingRow.quantity);
        setPrice(editingRow.price);
    };

    // Delete Button
    const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description" className="block font-semibold mb-2">Item Description</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Enter item description"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="quantity" className="block font-semibold mb-2">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        placeholder="Enter quantity"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />

                    <label htmlFor="price" className="block font-semibold mb-2">Price</label>
                    <input
                        type="number"
                        id="price"
                        placeholder="Enter price"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <label htmlFor="amount" className="block font-semibold mb-2">Total Amount</label>
                    <p className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-200 text-gray-700 shadow-sm w-full">
                        {amount}
                    </p>
                </div>
                <button type="submit" className="m-5 bg-teal-400 py-3 px-8 rounded-md shadow-md text-white font-semibold hover:bg-teal-500 transition-all ease-in-out duration-200">
                    {isEditing ? "Editing Row Item" : "Add Table Item"}
                </button>
            </form>

            {/* Table items */}
            <table width="100%" className="mb-10">
                <thead>
                    <tr className="bg-gray-100 p-1">
                        <td className="font-bold">Item description</td>
                        <td className="font-bold">Quantity</td>
                        <td className="font-bold">Price</td>
                        <td className="font-bold">Amount</td>
                        <td className="font-bold">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map(({ id, description, quantity, price, amount }) => (
                        <tr key={id}>
                            <td>{description}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td className="amount">{amount}</td>
                            <td>
                                <button
                                    onClick={() => deleteRow(id)}
                                    className="bg-gray-400 py-2 px-4 rounded-md shadow-md text-black font-semibold hover:bg-red-600 transition-all ease-in-out duration-200"
                                >
                                    <AiOutlineDelete className="text-black text-xl hover:text-white transition-all ease-in-out duration-200" />
                                </button>
                                <button
                                    onClick={() => editRow(id)}
                                    className="ml-3 bg-blue-400 py-2 px-4 rounded-md shadow-md text-white font-semibold hover:bg-blue-600 transition-all ease-in-out duration-200"
                                >
                                    <CiEdit className="text-white text-xl hover:text-gray-200 transition-all ease-in-out duration-200" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-6 text-right">
                <h2 className="text-3xl font-semibold text-black">
                    Total: <span className="font-bold">{total.toLocaleString()}</span>
                </h2>
            </div>

        </>
    );
}

export default TableForm;
