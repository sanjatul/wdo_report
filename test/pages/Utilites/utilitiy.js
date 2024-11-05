class Utility{
    async convertTextToNumber(text){
        const value=parseFloat(text.replace(/[$,]/g,""))
        return value;
    }

    async randomNumber(high,low ) {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    async createRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }
    
}

module.exports =new Utility();