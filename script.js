////////////////////
const sLotteryContractAddress = "0x6d6677ac831487A3fef198d10Cf2f06281b045Ab";
const sLotteryContractABI = [{"inputs":[],
                              "stateMutability":"nonpayable",
                              "type":"constructor"},

                              {"inputs":[],
                              "name":"buyLotteryTicket",
                              "outputs":[],
                              "stateMutability":"payable",
                              "type":"function"},
                              
                              {"inputs":[],
                              "name":"buySingleLotteryTicket",
                              "outputs":[],
                              "stateMutability":"payable",
                              "type":"function"},
                              
                              {"inputs":[],
                              "name":"collectBankedFees",
                              "outputs":[],
                              "stateMutability":"nonpayable",
                              "type":"function"},
                              
                              {"inputs":[],
                              "name":"currentPot",
                              "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
                              "stateMutability":"view",
                              "type":"function"},
                              
                              {"inputs":[],
                              "name":"endLotteryAndSendPrize",
                              "outputs":[],
                              "stateMutability":"nonpayable",
                              "type":"function"},
                              
                              {"inputs":[],
                              "name":"firstPrizePotShare",
                              "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
                              "stateMutability":"view",
                              "type":"function"},
                              
                              {"inputs":[],
                              "name":"myLottery",
                              "outputs":[{"internalType":"string",
                                    "name":"lotteryTitle",
                                    "type":"string"},
                                    {"internalType":"bool",
                                    "name":"lotteryTypeIsSingleTicket",
                                    "type":"bool"},
                                    {"internalType":"uint256",
                                    "name":"lotteryStartDate",
                                    "type":"uint256"},
                                    {"internalType":"uint256",
                                    "name":"lotteryTicketPrice",
                                    "type":"uint256"},
                                    {"internalType":"bool",
                                    "name":"lotteryIsOpen",
                                    "type":"bool"},
                                    {"internalType":"address",
                                    "name":"lotteryOwner",
                                    "type":"address"},
                                    {"internalType":"address payable",
                                    "name":"lotteryManager",
                                    "type":"address"}],
                              "stateMutability":"view",
                              "type":"function"},
                              
                              {"inputs":[{"internalType":"bool",
                                    "name":"openMyLottery",
                                    "type":"bool"}],
                              "name":"openOrCloseLottery",
                              "outputs":[],
                              "stateMutability":"nonpayable",
                              "type":"function"},
                              
                              {"inputs":[{"internalType":"string",
                                    "name":"myLotteryTitle",
                                    "type":"string"},
                                  {"internalType":"uint256",
                                    "name":"myLotteryStartDate",
                                    "type":"uint256"},
                                  {"internalType":"uint256",
                                    "name":"myLotteryTicketPrice",
                                    "type":"uint256"},
                                  {"internalType":"address payable",
                                    "name":"myLotteryManager",
                                    "type":"address"},
                                  {"internalType":"bool",
                                    "name":"myLotteryIsSingleTicket",
                                    "type":"bool"}],
                              "name":"runNewLottery",
                              "outputs":[],
                              "stateMutability":"nonpayable",
                              "type":"function"},
                              
                              {"inputs":[],
                              "name":"secondPrizePotShare",
                              "outputs":[{"internalType":"uint256",
                                    "name":"",
                                    "type":"uint256"}],
                              "stateMutability":"view",
                              "type":"function"},
                              
                              {"inputs":[],
                              "name":"ticketFeeShare",
                              "outputs":[{"internalType":"uint256",
                                          "name":"",
                                    "type":"uint256"}],
                              "stateMutability":"view", 
                              "type":"function"}];

const provider = new ethers.provider.Web3Provider(window.ethereum, "solana")

let sLotteryContract;
let signer;

async function buyTicket() {
  async function buyTicket() {
  try {
    const buyerAddress = document.getElementById("buyer").value;
    signer = buyerAddress;
    if (!sLotteryContract) {
      throw new Error("Contractul nu este inițializat corect.");
    }
    await sLotteryContract.buySingleLotteryTicket();
  } catch (error) {
    console.error("Eroare în cumpărarea biletului:", error.message);
  }
}
}

async function runNew() {
const ownerAddress = document.getElementById("ownerLottery").value;
const lotStartDate = document.getElementById("lotteryStartDate").value;
const lotTicketPrice = document.getElementById("lotteryTicketPrice").value;
const lotTicketManager = document.getElementById("ownerLottery").value;
const lotIsSingleTicket = 'true';
signer = ownerAddress;
await sLotteryContract.runNewLottery();
}

async function extractWinners() {
 const ownerAddress = document.getElementById("ownerLottery").value;
signer = ownerAddress;
await sLotteryContract.openOrCloseLottery();
await sLotteryContract.endLotteryAndSendPrize();
}
////////////////////