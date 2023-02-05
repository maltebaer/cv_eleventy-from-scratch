module.exports = {
    /**
     * Returns back the given date in human readable
     * formatt using the browsers locale
     *
     * @param {string | number | Date | null} date the date
     * @returns {String} human readable representation
    */
    getDateLocaleString(date) {
        if (date) return new Date(date).toLocaleDateString();

        return 'ongoing';
    }
};
