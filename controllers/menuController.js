const MenuItem = require('../models/menuItems');


const createMenuItem = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        if (!name || !price) {
            return res.status(400).json({ message: "Name and price are required." });
        }

        const newItem = new MenuItem({ name, description, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Error creating menu item", error });
    }
};


const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: "Error fetching menu items", error });
    }
};


const updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await MenuItem.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: "Error updating menu item", error });
    }
};


const deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await MenuItem.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).json({ message: "Menu item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting menu item", error });
    }
};

module.exports = { createMenuItem, getMenuItems, updateMenuItem, deleteMenuItem };
