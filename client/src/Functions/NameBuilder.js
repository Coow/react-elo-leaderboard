export default function NameBuilder(nick, firstName, lastName){
    if(!firstName || !lastName) {
        return nick
    } else {
        return `${firstName} "${nick}" ${lastName}`
    }
}