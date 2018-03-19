(function (translator) {
	translator.translations["pt-br"] = {
		// javascript alerts or messages
		"testneteditionactivated": "EDIÇÃO DA TESTNET ATIVADA",
		"paperlabelbitcoinaddress": "Endereço $PAC:",
		"paperlabelprivatekey": "Chave privada:",
		"paperlabelencryptedkey": "Chave privada criptografada (Senha necessária)",
		"bulkgeneratingaddresses": "Gerando endereços... ",
		"brainalertpassphrasetooshort": "A senha introduzida é pequena demais.\n\n",
		"brainalertpassphrasewarning": "Aviso: É importante que você escolha uma senha forte, para evitar ataques de força bruta que tentem adivinhar sua senha e roubar seus $PAC.",
		"brainalertpassphrasedoesnotmatch": "As senhas digitadas não são iguais.",
		"detailalertnotvalidprivatekey": "O texto que você digitou não é uma chave privada válida",
		"detailconfirmsha256": "O texto que você digitou não é uma chave privada válida\n\nDeseja usar esse texto como se fosse uma senha e gerar uma chave privada usando um hash SHA256 dessa senha?\n\nAviso: É importante escolher uma senha forte para evitar ataques de força bruta que tentem adivinhá-la e roubar seus $PAC.",
		"bip38alertincorrectpassphrase": "Senha incorreta para essa chave privada criptografada.",
		"bip38alertpassphraserequired": "Senha necessária para a chave BIP38",
		"vanityinvalidinputcouldnotcombinekeys": "Entrada inválida. Não foi possível combinar as chaves.",
		"vanityalertinvalidinputpublickeysmatch": "Entrada inválida. As chaves públicas de ambas as entradas são iguais. Você deve inserir duas chaves diferentes.",
		"vanityalertinvalidinputcannotmultiple": "Entrada inválida. Não é possível multiplicar duas chaves públicas. Clique em 'Somar' e some duas chaves públicas para adquirir um endereço bitcoin.",
		"vanityprivatekeyonlyavailable": "Disponível apenas quando se combinam duas chaves privadas",
		"vanityalertinvalidinputprivatekeysmatch": "Entrada inválida. As chaves privadas de ambas as entradas são iguais. Você deve inserir duas chaves diferentes.",

		// header and menu html
		"tagline": "Gerador local de carteiras $PAC usando Javascript de código aberto",
		"generatelabelbitcoinaddress": "Gerando endereço $PAC...",
		"generatelabelmovemouse": "Movimente um pouco o ponteiro do mouse para criar entropia...",
		"generatelabelkeypress": "OU digite alguns caracteres aleatórios nessa caixa de texto",
		"singlewallet": "Carteira única",
		"paperwallet": "Carteira em papel",
		"bulkwallet": "Múltiplos endereços",
		"brainwallet": "Carteira mental",
		"vanitywallet": "Carteira personalizada",
		"splitwallet": "Carteira fracionada",
		"detailwallet": "Detalhes da carteira",

		// footer html
		"footerlabeldonations": "Doações:",
		"footerlabeltranslatedby": "Tradução: 1LwaSNTZ7xAagYKyE68gT5iqX1DmPnmJmy",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Histórico de versões",
		"footerlabelgithub": "Repositório GitHub",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Copyright do código JavaScript: no código-fonte.",
		"footerlabelnowarranty": "Sem garantia.",

		// status html
		"statuslabelcryptogood": "&#10004; Boa!",
		"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
		"statusokcryptogood": "OK", 
		"statuslabelcryptobad": "&times; Oh não!", 
		"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
		"statusokcryptobad": "OK", 
		"statuslabelunittestsgood": "&#10004; Boa!",
		"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
		"statusokunittestsgood": "OK",
		"statuslabelunittestsbad": "&times; Oh não!", 
		"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
		"statusokunittestsbad": "OK", 
		"statuslabelprotocolgood": "&#10004; Boa!", 
		"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
		"statusokprotocolgood": "OK", 
		"statuslabelprotocolbad": "&#9888; Pense duas vezes!", 
		"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
		"statuslabelprotocolbad2": "download", 
		"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
		"statusokprotocolbad": "OK", 
		"statuslabelkeypool1": "This is a log of all the $PAC Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
		"statuskeypoolrefresh": "Atualizar", 
		"statusokkeypool": "OK",

		// single wallet html
		"newaddress": "Gerar endereço",
		"singleprint": "Imprimir",
		"singlelabelbitcoinaddress": "Endereço $PAC",
		"singlelabelprivatekey": "Chave privada (Wallet Import Format):",
		"singletip1": "<b>A $PAC wallet</b> is as simple as a single pairing of a $PAC address with its corresponding $PAC private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
		"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the $PAC address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you leave/refresh the site or press the \"Generate New Address\" button then a new private key will be generated and the previously displayed private key will not be retrievable. Your $PAC private key should be kept a secret. Whomever you share the private key with has access to spend all the $PACs associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
		"singletip3": "<b>Add funds</b> to this wallet by instructing others to send $PAC to your $PAC address.", //TODO: please translate
		"singletip4": "Check your balance</b> by going to http://usa.pacblockexplorer.com:3002/ and entering your $PAC address.<br><br><b>Usage: </b>", //TODO: please translate
		"singletip5": "You can spend your funds by downloading one of the popular $PAC p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a $PAC p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another $PAC address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining $PAC will be stored there.", //TODO: please translate
		"singleshare": "COMPARTILHE", 
		"singlesecret": "SECRETA", 

		// paper wallet html
		"paperlabelhideart": "Ocultar figura",
		"paperlabeladdressesperpage": "Endereços por página:",
		"paperlabeladdressestogenerate": "Total de endereços:",
		"papergenerate": "Gerar",
		"paperprint": "Imprimir",
		"paperlabelBIPpassphrase": "Senha:",
		"paperlabelencrypt": "Criptografar em BIP38?",
		"pwlabelq1" : "What is a paper wallet?",
		//"pwa1" : "Respuesta 1",
		"pwlabelq2" : "How to use your paper wallet",
		//"pwa2": "Respuesta 2",

		// bulk wallet html
		"bulklabelstartindex": "Começar em:",
		"bulklabelrowstogenerate": "Linhas a gerar:",
		"bulklabelcompressed": "Endereços comprimidos?",
		"bulkgenerate": "Gerar",
		"bulkprint": "Imprimir",
		"bulklabelcsv": "Valores separados por vírgula:",
		"bulklabelformat": "Índice,Endereço,Chave privada (formato para importar)",
		"bulklabelq1": "¿Por qué debo usar \"Direcciones en masa\" para aceptar $PACs en mi web?",
		"bulka1": "La forma tradicional de aceptar $PAC en tu web requiere tener instalado el cliente oficial de $PAC (\"bitcoind\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. Además, ejecutar el cliente en tu servidor supone que las claves privadas están también en el servidor y podrían ser comprometidas en caso de intrusión. Al usar este mecanismo, puedes subir al servidor sólo las dirección de $PAC y no las claves privadas. De esta forma no te tienes que preocupar de que alguien robe la cartera si se cuelan en el servidor.",
		"bulklabelq2": "¿Cómo uso \"Direcciones en masa\" para aceptar $PAC en mi web?",
		"bulklabela2li1": "Usa el tab \"Direcciones en masa\" para generar por anticipado muchas direcciones (más de 10000). Copia y pega la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en tu ordenador. Guarda una copia de seguridad en algún lugar seguro.",
		"bulklabela2li2": "Importa las direcciones en la base de datos de tu servidor. No subas la cartera ni las claves públicas, o de lo contrario te lo pueden robar. Sube sólo las direcciones, ya que es lo que se va a mostrar a los clientes.",
		"bulklabela2li3": "Ofrece una alternativa en el carro de la compra de tu web para que los clientes paguen con $PAC. Cuando el cliente elija pagar con $PAC, les muestras una de las direcciones de la base de datos como su \"dirección de pago\" y guardas esto junto con el pedido.",
		"bulklabela2li4": "Ahora te hace falta recibir una notificación del pago. Busca en google \"notificación de pagos bitcoin\" (o \"$PAC payment notification\" en inglés) y suscríbete a alguno de los servicios que aparezcan. Hay varios de ellos, que te pueden notificar vía Web services, API, SMS, email, etc. Una vez te llegue la notificación, lo cual puede ser automatizado, entonces ya puedes procesar el pedido. Para comprobar a mano si has recibido un pago, puedes usar Block Explorer: reemplaza DIRECCION a continuación por la dirección que estés comprobando. La transacción puede tardar entre 10 minutos y una hora en ser confirmada. <br />http://www.blockexplorer.com/address/DIRECCION<br /><br />Puedes ver las transacciones sin confirmar en: http://blockchain.info/ <br />Las transacciones sin confirmar suelen aparecer ahí en unos 30 segundos.",
		"bulklabela2li5": "Las $PAC que recibas se almacenarán de forma segura en la cadena de bloques. Usa la cartera original que generaste en el paso 1 para usarlas.",

		// brain wallet html
		"brainlabelenterpassphrase": "Senha:",
		"brainlabelshow": "Mostrar",
		"brainprint": "Imprimir",
		"brainlabelconfirm": "Confirmar senha:",
		"brainview": "Ver",
		"brainalgorithm": "Algoritmo: SHA256(senha)",
		"brainlabelbitcoinaddress": "Enderçeo $PAC:",
		"brainlabelprivatekey": "Chave privada (Wallet Import Format):",

		// vanity wallet html
		"vanitylabelstep1": "Passo 1 - Gere seu par de chaves",
		"vanitynewkeypair": "Gerar",
		"vanitylabelstep1publickey": "Chave pública:",
		"vanitylabelstep1pubnotes": "Copie e cole a linha acima no campo \"Your-Part-Public-Key\" presente no site do Vanity Pool.",
		"vanitylabelstep1privatekey": "Chave privada:",
		"vanitylabelstep1privnotes": "Copie e cole a chave privada acima em um arquivo de texto. Idealmente salve em um disco criptografado. Ela será necessária para recuperar a chave privada assim que a Vanity Pool encontrar o seu prefixo.",
		"vanitylabelstep2calculateyourvanitywallet": "Passo 2 - Calcule sua carteira Vanity",
		"vanitylabelenteryourpart": "Introduza a chave privada gerada no passo 1 acima, e que você já tem guardada:",
		"vanitylabelenteryourpoolpart": "Introduza a chave privada obtida no Vanity Pool:",
		"vanitylabelnote1": "[NOTA: essa caixa de texto pode aceitar uma chave pública ou privada]",
		"vanitylabelnote2": "[NOTA: essa caixa de texto pode aceitar uma chave pública ou privada]",
		"vanitylabelradioadd": "Adicionar",
		"vanitylabelradiomultiply": "Multiplicar",
		"vanitycalc": "Calcular carteira personalizada",
		"vanitylabelbitcoinaddress": "Endereço $PAC Vanity:",
		"vanitylabelnotesbitcoinaddress": "Esse é o seu novo endereço, que deveria conter o seu prefixo exigido.",
		"vanitylabelpublickeyhex": "Chave pública Vanity (HEX):",
		"vanitylabelnotespublickeyhex": "Essa é a sua chave pública em formato hexadecimal.",
		"vanitylabelprivatekey": "Chave privada Vanity (WIF):",
		"vanitylabelnotesprivatekey": "Essa é a chave privada para introduzir em sua carteira.",

		// detail wallet html
		"detaillabelenterprivatekey": "Insira sua chave privada",
		"detailkeyformats": "Formatos de chave: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Ver detalhes",
		"detailprint": "Imprimir",
		"detaillabelnote1": "Sua chave privada é um número secreto, único, que somente você tem acesso. Ela pode ser expressa em vários formatos. Abaixo mostramos o endereço e a chave pública que correspondem à sua chave privada, assim como a chave privada nos formatos mais conhecidos (WIF, hex, base64 y mini).",
		"detaillabelnote2": "As versões do $PAC acima da v0.6+ armazenam as chaves públicas comprimidas. O cliente também suporta a importação/exportação de chaves privadas usando importprivkey/dumpprivkey. O formato das chaves privadas exportadas depende se o endereço foi gerado em uma carteira antiga ou nova.",
		"detaillabelbitcoinaddress": "Endereço $PAC:",
		"detaillabelbitcoinaddresscomp": "Endereço $PAC (comprimido):",
		"detaillabelpublickey": "Chave pública (130 caracteres [0-9A-F]):",
		"detaillabelpublickeycomp": "Chave pública (comprimida, 66 caracteres [0-9A-F]):",
		"detaillabelprivwif": "Chave privada para importação (51 caracteres em base58, inicia com um",
		"detaillabelprivwifcomp": "Chave privada para importação (comprimida, 52 caracteres em base58, inicia com",
		"detailcompwifprefix": "'K' ou 'L'",
		"detaillabelprivhex": "Chave privada em formato hexadecimal (64 caracteres [0-9A-F]):",
		"detaillabelprivb64": "Chave privada em base64 (44 caracteres):",
		"detaillabelprivmini": "Chave privada en formato mini (22, 26 ou 30 caracteres, inicia com 'S'):",
		"detaillabelpassphrase": "Senha BIP38",
		"detailbip38decryptbutton": "Descriptografar BIP38",
		"detailbip38encryptbutton": "Criptografar em BIP38", 
		"detaillabelq1": "Como eu faço uma carteira usando um dado? O que é o formato B6?",
		"detaila1": "Uma parte importante ao criar um carteira $PAC é se assegurar que os números aleatórios usados para criar a carteira sejam realmente aleatórios. A aleatoriedade física é melhor do que a pseudo-aleatoriedade gerada por computador. A maneira mais fácil de gerar aleatoriedade física é com dados. Para criar um chave privada $PAC você precisa de apenas um dado de seis lados, o qual você jogará 99 vezes. A cada jogada, anote o valor do dado. Ao anotar os valores, siga as seguintes regras: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Ao fazer isso, você está anotando esse grande número aleatório, sua chave privada, no formato base 6 (B6). Você pode então digitar essa chave privada em base 6 contendo 99 caracteres no campo de texto acima e clicar em Ver Detalhes. Você então verá o endereço $PAC associado com sua chave privada. Você deve também anotar sua chave privada no formato WIF, já que ele é mais amplamente utilizado."
	};
})(ninja.translator);