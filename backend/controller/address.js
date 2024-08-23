const Address = require('../models/address');

async function handleCreateAddress(req, res) {
    const { fullName, email, phoneNumber, fullAddress } = req.body;
    const address = await Address.create({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        fullAddress: fullAddress,
        addressOf: req.user._id,
    })
    if (address) {
        return res.status(200).json(address);
    } else {
        return res.status(400).json({ message: 'error creating address' });
    }
}

async function handleGetAllAddressOfUser(req, res) {
    const user = req.user._id;
    const addressList = await Address.find({ addressOf: user });
    if (addressList.length !== 0) {
        return res.status(200).json(addressList);
    } else {
        return res.status(400).json({ message: 'user have no address' });
    }
}

async function handleUpdateAddressById(req, res) {
    const addressToBeChangedId = req.params.id;
    const { fullName, email, phoneNumber, fullAddress } = req.body;
    try {
        const address = await Address.findById(addressToBeChangedId);
        if (address) {
            address.fullName = fullName || address.fullName;
            address.fullAddress = fullAddress || address.fullAddress;
            address.email = email || address.email;
            address.phoneNumber = phoneNumber || address.phoneNumber;
            const updatedAddress = await address.save();
            return res.status(200).json({
                message: 'address updated',
                updatedAddress
            });
        } else {
            return res.status(400).json({ message: 'No address by this id' });

        }
    } catch (error) {
        return res.status(400).json({ message: 'error updating address' });
    }
}

async function handleDeleteAddressById(req, res) {
    const addressToBeDeletedId = req.params.id;
    try {
        await Address.findByIdAndDelete(addressToBeDeletedId);
        return res.status(200).json({ message: 'Deletion Completed' });
    } catch (error) {
        return res.status(400).json({ message: 'Error in deletion' });
    }
}

module.exports = {
    handleCreateAddress,
    handleGetAllAddressOfUser,
    handleUpdateAddressById,
    handleDeleteAddressById,
}