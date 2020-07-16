  /* Todo:
            Есть 3 логгера, которые выводят разные заголовки и текст сообщений
            Задача - реализовать такую же функциональность выполняемую одной функцией
        */
			 function log() {
				// todo
			}

			function log1(message) {
				let out = `LOG_1: ${message}`;
				console.log(out);
			}
			function log2(message) {
				let out = `LOG_2: ${message}`;
				console.log(out);
			}
			function log3(message) {
				let out = `LOG_3: ${message}`;
				console.log(out);
			}
			log1("Message 1");
			log2("Message 2");
			log3("Message 3");