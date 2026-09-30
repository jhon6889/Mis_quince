document.addEventListener("DOMContentLoaded", () => {

    /*
    ==========================================
    CUENTA REGRESIVA
    ==========================================
    */

    // 23 de enero de 2027 - 7:00 PM
    const eventDate = new Date("2027-01-23T19:00:00");

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const eventStarted = document.getElementById("eventStarted");
    const countdown = document.getElementById("countdown");


    function updateCountdown() {

        const now = new Date();

        const difference = eventDate.getTime() - now.getTime();


        /*
        Si llegó la fecha del evento
        */
        if (difference <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            countdown.style.display = "none";

            eventStarted.style.display = "block";

            return;
        }


        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );


        daysElement.textContent = String(days).padStart(2, "0");

        hoursElement.textContent = String(hours).padStart(2, "0");

        minutesElement.textContent = String(minutes).padStart(2, "0");

        secondsElement.textContent = String(seconds).padStart(2, "0");
    }


    updateCountdown();

    setInterval(updateCountdown, 1000);


    /*
    ==========================================
    MÚSICA
    ==========================================
    */

    const music = document.getElementById("music");
    const musicButton = document.getElementById("musicButton");

    let playing = false;


    musicButton.addEventListener("click", () => {

        if (!playing) {

            music.play()
                .then(() => {

                    playing = true;

                    musicButton.querySelector(".music-icon").textContent = "❚❚";
                    musicButton.querySelector(".music-text").textContent = "Pausar";

                })
                .catch(error => {

                    console.log(
                        "El navegador bloqueó la reproducción:",
                        error
                    );

                });

        } else {

            music.pause();

            playing = false;

            musicButton.querySelector(".music-icon").textContent = "♫";
            musicButton.querySelector(".music-text").textContent = "Música";
        }

    });


    /*
    ==========================================
    INTENTO DE REPRODUCCIÓN AUTOMÁTICA
    ==========================================
    
    Los navegadores modernos pueden bloquear
    el autoplay con sonido.

    Por eso también dejamos el botón de música.
    */

    music.play()
        .then(() => {

            playing = true;

            musicButton.querySelector(".music-icon").textContent = "❚❚";
            musicButton.querySelector(".music-text").textContent = "Pausar";

        })
        .catch(() => {

            console.log(
                "Autoplay bloqueado. El usuario puede activar la música manualmente."
            );

        });

});