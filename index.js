
async function sendTelegramMessage() {
    const botToken = "7058068827:AAEwJvDklNcroajvm3PUIx9SvYgbOVAXG1k";
    const chatId = "-4230106591";
    const Name = document.getElementById("sender").value;
    const senderAddress = document.getElementById("sender-address").value;
    const recipient = document.getElementById("recipient").value;
    const recipientAddress = document.getElementById("recipient-address").value;
    const success = document.getElementById("success").value;
    const docNumber = document.getElementById("docNumber").value;
    const status = document.getElementById("status").value;
    const senderNumber = document.getElementById("senderNumber").value;
    const recipientNumber = document.getElementById("recipientNumber").value;




    
    const Sended = `
    
   Xat jo'natmasi: -----------------------\n 
    Jo'natuvchi ismi: ${Name}\n-----------------------\n 
    Jo'natuvchi manzili: ${senderAddress}\n-----------------------\n
    Jo'natuvchi nomeri: ${senderNumber}\n-----------------------\n
    Qabul qiluvchi ismi:${recipient}\n-----------------------\n
    Qabul qiluvchi manzili:${recipientAddress}\n-----------------------\n
    Qabul qiluvchi nomeri:${recipientNumber}\n-----------------------\n
    Yetkazib berish uzunligi(km) ${success}\n-----------------------\n
    Hujjat raqami ${docNumber}\n-----------------------\n
    Holati ${status}\n-----------------------\n
    
    `
    try {
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: Sended
                }),
            }
        );
        if (response.status === 200) { 
            alert("Xabaringiz yetkazildi");
            window.location.reload()
        }
    } catch (error) {
        console.error("Xatolik:", error);

    }
    console.log(Name);
}
