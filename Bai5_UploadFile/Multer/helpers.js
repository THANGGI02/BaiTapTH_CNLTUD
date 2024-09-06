const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Chỉ cho phép file là hình ảnh';
        return cb(new Error('Chỉ cho phép file là hình ảnh'), false);
    }
    cb(null, true);
};
exports.imageFilter = imageFilter;