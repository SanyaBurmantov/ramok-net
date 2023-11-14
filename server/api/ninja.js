export default defineEventHandler( async (event) => {

    const { name } = getQuery(event);

    const { age } = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_JDTRnQm5rxCB74PmVqV8yuO0O2FT1u2xB7FtdAxU')

    return data

})