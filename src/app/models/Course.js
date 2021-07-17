const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');// Plugin hỗ trợ xóa mềm

mongoose.plugin(slug);
const Schema = mongoose.Schema;

//Tạo Scheme
const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    // deletedAt: true,// Thêm đối số để khi render sẽ loại những đối tượng bị xóa mềm đi
    overrideMethods: 'all',// 
});

module.exports = mongoose.model('Course', Course);
