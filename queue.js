const queue = []; // Inicializa a fila

        function addToQueue() {
            const clientName = document.getElementById("numero").value; // Utilizando o ID correto
            const color = document.getElementById("colorPicker").value;

            // Adiciona o cliente à fila
            queue.push({ name: clientName, color: color });

            // Atualiza a visualização da fila
            updateQueue();
        }

        function removeFromQueue() {
            // Remove o primeiro cliente da fila (FIFO)
            if (queue.length > 0) {
                queue.shift();
                updateQueue();
            }
        }

        function updateQueue() {
            const queueElement = document.getElementById("queue");
            queueElement.innerHTML = ""; // Limpa a visualização da fila

            // Adiciona cada cliente da fila como um elemento de lista
            queue.forEach(client => {
                const clientElement = document.createElement("div");
                clientElement.style.color = client.color;
                clientElement.textContent = `${client.name}`;
                queueElement.appendChild(clientElement);
            });
        }
        function listReverseQueue() {
            const queueElement = document.getElementById("queue");
            queueElement.innerHTML = ""; // Limpa a visualização da fila
        
            // Adiciona cada cliente da fila como um elemento de lista, começando pelo último
            for (let i = queue.length - 1; i >= 0; i--) {
                const client = queue[i];
                const clientElement = document.createElement("div");
                clientElement.style.backgroundColor = client.color;
                clientElement.textContent = `${client.name} - Cor: ${client.color}`;
                queueElement.appendChild(clientElement);
            }
        }
        