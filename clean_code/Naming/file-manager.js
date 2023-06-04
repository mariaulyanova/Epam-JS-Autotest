const path = require('path');
const fs = require('fs');

const PropertyUtil = require('./thirdparty/property-util');
const InvalidFileTypeError = require('./thirdparty/invalid-file-type-error');
const InvalidDirectoryException = require('./thirdparty/invalid-directory-exception');
const FileExtensionPredicate = require('./file-extension-predicate');

const IMAGE_EXTENSIONS = ['jpg', 'png'];
const DOCUMENT_EXTENSIONS = ['pdf', 'doc'];

module.exports = class FileManager {
    constructor() {
        this.basePath = PropertyUtil.loadProperty('basePath');
    }

    retrieveFile(fileName) {
        this.validateFileType(fileName);
        const directoryPath = this.basePath + path.sep;
        return path.resolve(directoryPath, fileName);
    }

    listAllImages() {
        return this.getFilesByExtensions(this.basePath, IMAGE_EXTENSIONS);
    }

    listAllDocumentFiles() {
        return this.getFilesByExtensions(this.basePath, DOCUMENT_EXTENSIONS);
    }

    validateFileType(fileName) {
        if (this.isInvalidFileType(fileName)) {
            throw new InvalidFileTypeError('Unsupported file type: ' + fileName);
        }
    }

    isInvalidFileType(fileName) {
        return this.isInvalidImageType(fileName) && this.isInvalidDocumentType(fileName);
    }

    isInvalidImageType(fileName) {
        const imageExtensionsPredicate = new FileExtensionPredicate(IMAGE_EXTENSIONS);
        return !imageExtensionsPredicate.test(fileName);
    }

    isInvalidDocumentType(fileName) {
        const documentExtensionsPredicate = new FileExtensionPredicate(DOCUMENT_EXTENSIONS);
        return !documentExtensionsPredicate.test(fileName);
    }

    getFilesByExtensions(directoryPath, allowedExtensions) {
        const extensionPredicate = new FileExtensionPredicate(allowedExtensions);
        return this.getDirectoryContents(directoryPath).filter((file) => {
            return extensionPredicate.test(file);
        });
    }

    getDirectoryContents(directoryPath) {
        const directoryStats = fs.statSync(directoryPath);
        this.validateDirectory(directoryStats, directoryPath);
        return fs.readdirSync(directoryPath);
    }

    validateDirectory(directoryStats, directoryPath) {
        if (this.isInvalidDirectory(directoryStats)) {
            throw new InvalidDirectoryException('Invalid directory: ' + directoryPath);
        }
    }

    isInvalidDirectory(directoryStats) {
        return !directoryStats.isDirectory();
    }
};
