
export class sendToSubscribers {


        // { chatIdNikita: "2024969663" },
    static sendData(data){
        let token = "6619858114:AAHDaC0QVvueqSQMwlol7rkit-vw6qTHufQ"
        let sanya = "408745156"
        console.log(data)
        let { name, comment, phone, products, finalPrice } = data
            let strMatrix = "";
        let posValue = products.length;

        let listProducts = products.map(el => {
            strMatrix += "%0A %09" + el.title.toString();
            strMatrix += "%0A %09" + el.category.toString();
            strMatrix += "%0A %09Цена " + el.price.toString() + "BYN%0A";
        })

        let message = `Клиент: ${name}%0AНомер телефона ${phone} %0AКоммент покупателя ${comment}%0AТовары: ${strMatrix}%0AИтоговая цена: ${finalPrice.toString()}BYN`;

        let api = new XMLHttpRequest();


            const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${sanya}&text=${message}&parse_mode=html`
            api.open("GET", url, true);
            api.send();

    }
}

