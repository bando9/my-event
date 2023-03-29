const Categories = require('./model');

const create = async (req, res, next) => {
    try {
        const { name } = req.body;
        const result = await Categories.create({name});
        res.status(201).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try{
        const { id } = req.params;
        const result = await Categories.findById(id);

        res.status(200).json({
            data: result,
        })
    } catch(err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        // Cara 1
        // const checkingCategories = await Categories.findOne({ _id: id });

        // if (!checkingCategories) {
        //     return res.status(404).json({
        //         message: 'Id categories tidak ditemukan'
        //     })
        // };

        // checkingCategories.name = name;
        // await checkingCategories.save();

        // Cara 2
        const result = await Categories.findByIdAndUpdate(
            { _id: id },
            { name },
            { runValidators: true }
        )

        res.status(200).json({
            data: checkingCategories,
        })
    } catch(err) {
        next(err);
    }
}

const index = async(req, res, next) => {
    try {
        const result = await Categories.find().select('_id name');
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    index,
    update,
    find,
    create,
}