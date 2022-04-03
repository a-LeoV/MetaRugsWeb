import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";
import { useWeb3ExecuteFunction, useMoralisWeb3ApiCall } from "react-moralis";
import { Card, Button, InputNumber, Typography, Alert, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { getChainById } from "helpers/networks";
import { FireOutlined, CheckOutlined, WalletOutlined } from "@ant-design/icons";
import "./styles/home.css";

const { Text } = Typography;
const styles = {
  title: {
    fontSize: "16px",
    fontWeight: "700", 
    textAlign: "center",
    flex: "1",
    color: "white",
   
  },
  text: {
    fontSize: "16px",
    color: "white",
    
  },
  card: {
  
    border: "1px solid #e7eaf3",
    width: "400px",
    height: "250px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background:"#151719",
  },
  card2: {
    
    border: "1px solid #e7eaf3",
    width: "810px",
    height: "300px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background:"#151719",
  },
  buttons: {
    background: "#6163ff",
    color: "white",
    shape: "round",
   
    border: "none",
    display: "flex",
    flex: "1",
    width: "100%",
    height: "130px",
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "2px",
    fontSize: "40px",
    fontWeight: "700",
  },
  disabledButtons: {
    background: "#D5D5D5",
    color: "#2c2d2e",
    shape: "round",
  
    border: "none",
    display: "flex",
    flex: "1",
    width: "350px",
    height: "130px",
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "2px",
    fontSize: "40px",
    fontWeight: "300",
    cursor: "not-allowed",
  },
  buttons2: {
    background: "#6163ff",
    color: "white",
    shape: "round",
    
    border: "none",
    display: "flex",
    flex: "1",
    width: "100%",
    height: "130px",
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
   
    borderRadius: "2px",
    fontSize: "40px",
    fontWeight: "700",
  },
};

function Burn () {
  
    const { chainId, crContractABI, crAddress, mrAddress, mrContractABI, walletAddress } = useMoralisDapp();
    const { authenticate, isAuthenticated, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    const crContractABIJson = JSON.parse(crContractABI);
    const mrContractABIJson = JSON.parse(mrContractABI);
    const [loading, setLoading] = useState(false);
    const setApprovalForAllFunction = "setApprovalForAll";
    const burn2mint_ALL_RUGSFunction = "burn2mint_ALL_RUGS";
    const isApprovedForAllFunction = "isApprovedForAll";
    const mintFunction = "mint";
    const [amountToMint, setAmount] = useState(null);
    const pricePerMR = "50000000000000000";
    const [isApproved, setIsApproved] = useState(false);
    const SECOND_MS = 100;
    
    async function callIsApproved(){
      
      const ops = {
        chain: chainId,
        contractAddress: crAddress,
        functionName: isApprovedForAllFunction,
        abi: crContractABIJson,
      params : {
          owner: walletAddress,
          operator: mrAddress,
      }
      };
      await contractProcessor.fetch({
        params: ops,
        onSuccess: () => {
          setIsApproved(contractProcessor.data)
        },
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      callIsApproved();
    }, SECOND_MS);
   
     return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
   }, [callIsApproved])

     async function setApprovalForAll(){
          const ops = {
              contractAddress: crAddress,
              functionName: setApprovalForAllFunction,
              abi: crContractABIJson,
            params : {
                operator: mrAddress,
                approved: true,
            }
          };
          await contractProcessor.fetch({
            params: ops,
            onSuccess: () => {
              console.log("Approval Received");
              setLoading(false);
              succApprove();
            },
            onError: (error) => {
              setLoading(false);
              failApprove();
            },
          });
        }

    
    async function burn2mint_ALL_RUGS(){
      const ops = {
          contractAddress: mrAddress,
          functionName: burn2mint_ALL_RUGSFunction,
          abi: mrContractABIJson,
          params : {
            owner: walletAddress,
          }
      };
  
      await contractProcessor.fetch({
          params: ops,
          onSuccess: () => {
            console.log("CryptoRugs burned successfully - MetaRugs minted");
            setLoading(false);
            succBurn();
          },
          onError: (error) => {
            setLoading(false);
            failBurn();
          },
        });
      }

      async function mintArug(amount) {
        const p = String(amount * pricePerMR);
        const ops = {
            contractAddress: mrAddress,
            functionName: mintFunction,
            abi: mrContractABIJson,
            params : {
              numberOfTokens: amount,
            },
            msgValue: String(p),
        };
    
        await contractProcessor.fetch({
            params: ops,
            onSuccess: () => {
              console.log("MetaRugs minted!");
              setLoading(false);
              succMint();
            },
            onError: (error) => {
              setLoading(false);
              failMint();
            },
          });
        }

      function onChange(value) {
        setAmount(value);
      }

      function succBurn() {
        let secondsToGo = 5;
        const modal = Modal.success({
          title: "Success!",
          content: `CryptoRugs burned successfully - MetaRugs minted`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      }

      function succMint() {
        let secondsToGo = 5;
        const modal = Modal.success({
          title: "Success!",
          content: `MetaRugs minted!`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      }

      function failBurn() {
        let secondsToGo = 5;
        const modal = Modal.error({
          title: "Error!",
          content: `There was a problem burning your NFT`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      }
      function failMint() {
        let secondsToGo = 5;
        const modal = Modal.error({
          title: "Error!",
          content: `There was a problem minting your MetaRugs`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      }

      function succApprove() {
        let secondsToGo = 5;
        const modal = Modal.success({
          title: "Success!",
          content: `Approval is now set, you may burn your CryptoRugs`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      }

      function failApprove() {
        let secondsToGo = 5;
        const modal = Modal.error({
          title: "Error!",
          content: `There was a problem with setting approval`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      }



    return (
      <div className="home container">
          <div style={styles.NFTs}>
        {isAuthenticated != true && (
          <>
            <Alert
              message="Connect a wallet to burn CryptoRugs and mint MetaRugs"
              type="error"
            />
            <div style={{ marginBottom: "10px" }}></div>
          </>
        )}
        <div style={styles.NFTs}>
        {getChainById(chainId) != "1" && (
          <>
            <Alert
              message="Connect to Ethereum mainnet to burn CryptoRugs and mint MetaRugs"
              type="error"
            />
            <div style={{ marginBottom: "10px" }}></div>
          </>
        )}
        </div>
        </div>
        

      <div
        className="startup2"
        style={{ margin: "10px 0" }}
  
      >
        <h1>
        Get MetaRugged
        </h1>
        <h2>
        Burn your CryptoRugs and get MetaRugs
        </h2>
        </div>
 
          
        

    <div className=" card_container">
      <Card className="card" title={<h1 style={styles.title}>📝 Approve MetaRugs</h1>}>
      <Button icon={<CheckOutlined />}
        style={ 
          isApproved == true
            ? styles.disabledButtons
            : styles.buttons
      }
        onClick={() => setApprovalForAll()} 
        disabled={isApproved == true}
        > {isApproved ? "Approved" : "Approve"}</Button>
      </Card>
      
      <div>
        <Card  className="card" title={<h1 style={styles.title}>🔥 Burn all CryptoRugs</h1>}>
        <Button icon={<FireOutlined />} 
         style={ 
          isApproved == false
            ? styles.disabledButtons
            : styles.buttons
      }
        onClick={() => burn2mint_ALL_RUGS()}
        disabled={isApproved == false}
        > {isApproved ? "Burn" : "Approve to Burn"}</Button>
        </Card>
        </div>
        <div className="startup2" >
     <h2 style={{padding: "10px"}} >
        MetaRugs are also mintable for ETH
        </h2>
     </div>
   <div>     <Card className=" card2"  title={<h1 style={styles.title}>Mint MetaRugs | 0.05 ETH</h1>}>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center"}} >
       
     
     </div> 
    
        <Button  style={styles.buttons2} icon={<WalletOutlined />} 
        onClick={() => mintArug(amountToMint)}
        > Mint</Button>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: "20px", padding: "25px"}} >
        <InputNumber autoFocus={true} defaultValue={"0"} min={"1"} max={"30"} onChange={onChange} />
     {<h1 style={styles.text}> Max 30 MetaRugs for transaction</h1>}
        </div>
        </Card>
        </div>
      </div>
      </div>
    
  )

};

export default Burn;

 