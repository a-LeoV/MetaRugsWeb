import React, { useState, useEffect } from "react";
import { getNativeByChain } from "helpers/networks";
import { getCollectionsByChain, getAddrs } from "helpers/collections";
import {
  useMoralis,
  useMoralisQuery,
} from "react-moralis";
import { Card, Image, Tooltip, Modal, Badge, Alert, Spin, Switch, Button } from "antd";
import { useNFTTokenIds } from "hooks/useNFTTokenIds";
import { useGraveBalance} from "hooks/useGraveBalance";
import {
  FileSearchOutlined,
  RightCircleOutlined,
  RestOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { getExplorer, getMarketPlace } from "helpers/networks";
import { useWeb3ExecuteFunction } from "react-moralis";
import { useAPIContract } from "hooks/useAPIContract";
const { Meta } = Card;


const styles = {
  NFTs: {
    display: "flex",
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: "1000px",
    gap: "10px",
  },
  banner: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "0 auto",
    width: "600px",
    //borderRadius: "10px",
    height: "150px",
    marginBottom: "40px",
    paddingBottom: "20px",
    borderBottom: "solid 1px #e3e3e3",
  },
  logo: {
    height: "115px",
    width: "115px",
    borderRadius: "50%",
    // positon: "relative",
    // marginTop: "-80px",
    border: "solid 4px white",
    objectFit: "contain",
  },
  text: {
    color: "#Dbdcdc",
    fontSize: "27px",
    fontWeight: "bold",
  },
};

function NFTTokenIds({ inputValue, setInputValue }) {
  const { Moralis } = useMoralis();
  const fallbackImg =
    "data:image/png;base64,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";
  const { NFTTokenIds, totalNFTs, fetchSuccess } = useNFTTokenIds(inputValue);
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { GraveBalance, totalGraveNFTs } = useGraveBalance(inputValue);
  const [visible, setVisibility] = useState(false);
  const setApprovalForAllFunction = "setApprovalForAll";
  const isApprovedForAllFunction = "isApprovedForAll";
  const calculateRewardFunction = "calculateReward";
  const [ownedNFTs, setOwnedNFTs] = useState(false);
  const [nftToBury, setnftToBury] = useState(null);
  const [loading, setLoading] = useState(false);
  const contractProcessor = useWeb3ExecuteFunction();
  const RUGDProcessor = useWeb3ExecuteFunction();
  const ItemImage = Moralis.Object.extend("ItemImages");
  const { chainId, marketAddress, contractABI, walletAddress, crTestAddress, mrAddress, crTestContractABI, GraveAddress, GraveContractABI } =
    useMoralisDapp();
  const crTestContractABIJson = JSON.parse(crTestContractABI);
  const GraveContractABIJson = JSON.parse(GraveContractABI);
  const BuryNFTFunction = "BuryNFT";
  const nativeName = getNativeByChain(chainId);
  const contractABIJson = JSON.parse(contractABI);
  const [isApproved, setIsApproved] = useState(false);
  const SECOND_MS = 150;
  const SECOND_MSReward = 30;
  const queryMarketItems = useMoralisQuery("MarketItems");
  const fetchMarketItems = JSON.parse(
    JSON.stringify(queryMarketItems.data, [
      "objectId",
      "createdAt",
      "price",
      "nftContract",
      "itemId",
      "sold",
      "tokenId",
      "seller",
      "owner",
      "confirmed",
    ])
  );
  const purchaseItemFunction = "createMarketSale";
  const NFTCollections = getCollectionsByChain(chainId);

  async function callIsApproved(){
      
    const ops = {
      chain: chainId,
      contractAddress:  inputValue,
      functionName: isApprovedForAllFunction,
      abi: crTestContractABIJson,
      params: {
        owner: walletAddress,
        operator: GraveAddress,
      },
    };
    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        setIsApproved(contractProcessor.data)
      },
  })
}

useEffect(() => {
  if (isApproved === false){
  const interval = setInterval(() => {
    callIsApproved();
  }, SECOND_MS);

   return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
 }}, [callIsApproved])

  
 async function calculateRUGDReward(nftaddrs){
   
  const options = {
    
    abi: GraveContractABIJson,
    contractAddress: GraveAddress,
    functionName: calculateRewardFunction,
    chain: chainId,
    params: {
      _project: nftaddrs,
    },
  };
  await RUGDProcessor.fetch({
    params: options,
 
  })
}


  async function setApprovalForAll() {
    setLoading(true);
    const ops = {
      contractAddress: inputValue,
      functionName: setApprovalForAllFunction,
      abi: crTestContractABIJson,
      params: {
        operator: GraveAddress,
        approved: true,
      },
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

  function succApprove() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Success!",
      content: `Approval is now set, you may burn this collection!`,
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

  async function burial(nft) {
    setLoading(true);
    const ops = {
      contractAddress: GraveAddress,
      functionName: BuryNFTFunction,
      abi: GraveContractABIJson,
      params: {
        _project: inputValue,
        _id: nft.token_id,
      },
    };

    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        console.log("Rug burned successfully -- You got $RUGD");
        setLoading(false);
        setVisibility(false);
        addItemImage();
        succBury();
      },
      onError: (error) => {
        setLoading(false);
        failBury();
      },
    });
  }

  function succBury() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Success!",
      content: `Rug burned successfully -- You got $RUGD`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  function failBury() {
    let secondsToGo = 5;
    const modal = Modal.error({
      title: "Error!",
      content: `There was a problem with your NFT burial`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  async function purchase() {
    setLoading(true);
    const tokenDetails = getMarketItem(nftToBury);
    const itemID = tokenDetails.itemId;
    const tokenPrice = tokenDetails.price;
    const ops = {
      contractAddress: marketAddress,
      functionName: purchaseItemFunction,
      abi: contractABIJson,
      params: {
        nftContract: nftToBury.token_address,
        itemId: itemID,
      },
      msgValue: tokenPrice,
    };

    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        console.log("success");
        setLoading(false);
        setVisibility(false);
        updateSoldMarketItem();
        succPurchase();
      },
      onError: (error) => {
        setLoading(false);
        failPurchase();
      },
    });
  }

  const handleBurial = (nft) => {
    setnftToBury(nft);
    console.log(nft.image);
    setVisibility(true);
  };

  function succPurchase() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Success!",
      content: `You have purchased this NFT`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  function failPurchase() {
    let secondsToGo = 5;
    const modal = Modal.error({
      title: "Error!",
      content: `There was a problem when purchasing this NFT`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  async function updateSoldMarketItem() {
    const id = getMarketItem(nftToBury).objectId;
    const marketList = Moralis.Object.extend("MarketItems");
    const query = new Moralis.Query(marketList);
    await query.get(id).then((obj) => {
      obj.set("sold", true);
      obj.set("owner", walletAddress);
      obj.save();
    });
  }

  const getMarketItem = (nft) => {
    const result = fetchMarketItems?.find(
      (e) =>
        e.nftContract === nft?.token_address &&
        e.tokenId === nft?.token_id &&
        e.sold === false &&
        e.confirmed === true
    );
    return result;
  };

  const [checked, setChecked] = React.useState(false);

   function findArrayElementByAddrs(array, addrs) {
    return NFTCollections.find((element) => {
      return element.addrs === inputValue;
    })
  };




  function addItemImage() {
    const itemImage = new ItemImage();

    itemImage.set("image", nftToBury.image);
    itemImage.set("nftContract", nftToBury.token_address);
    itemImage.set("tokenId", nftToBury.token_id);
    itemImage.set("name", nftToBury.name);
    itemImage.save();
  }

  return (
    <>
       <div className="home container">
        {isAuthenticated != true && (
          <>
            <Alert style={{marginBottom: "1rem"}}
              message="Connect a wallet to see whitelisted collections for selected chain"
              type="error"
            />
            <div style={{ marginBottom: "10px" }}></div>
          </>
        )}

        <div
        className="startup2"
        style={{ margin: "10px 0" }}
  
      >
        <h1>
        Bury NFTs and get $RUGD
        </h1>
        <h2>
        Change chains to browse whitelisted collections
        </h2>
               {/* remove me after sale starts */}
               <div> <>
            <Alert
              message="WARNING: NFT GRAVEYARD is not active yet"
              type="error"
            />
            <div style={{ marginBottom: "10px" }}></div>
          </>
          </div>
          {/* remove me after sale starts */}
        </div>

        </div>
      <div>
        {inputValue !== "explore" && totalNFTs !== undefined && 
          <>
            {!fetchSuccess && (
              <>
                <Alert
                  message="Unable to fetch all NFT metadata... We are searching for a solution, please try again later!"
                  type="warning"
                />
                <div style={{ marginBottom: "10px" }}></div>
              </>
            )}
            <div style={styles.banner}>
              
              <Image 
                preview={false}
               
                src={findArrayElementByAddrs(inputValue)?.image || "error"}
                fallback={fallbackImg}
                alt=""
                style={styles.logo}
                
              />
              
              <div style={styles.text}>
                <>
                  <div>{`${NFTTokenIds[0]?.name}`}</div>
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#Dbdcdc",
                      fontWeight: "normal",
                    }}
                  >
                    NFTs: {
                       checked === true
                       ? `#${totalGraveNFTs}`
                       : `#${totalNFTs}`}
                       
                    <div
                    style={{
                      fontSize: "18px",
                      color: "#9c9c9c",
                      fontWeight: "normal",
                    }}
                  >
                    My NFTs <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultUnchecked onChange={setChecked} />
                  </div>
                  </div>
                </> 
              </div>
              
            </div>
          </>
        }

        <div style={styles.NFTs}>
          {inputValue === "explore" &&
            NFTCollections?.map((nft, index) => (
              <Card
                hoverable
                onClick={() => setInputValue(nft?.addrs)}
                actions={[
                  <Tooltip title="View Collection">
                    <RightCircleOutlined
                      onClick={() => setInputValue(nft?.addrs)}
                    />
                  </Tooltip>,
                ]}
                style={{ width: 240, border: "2px solid #e7eaf3" }}
                cover={
                  <Image
                    preview={false}
                    src={nft?.image || "error"}
                    fallback={fallbackImg}
                    alt=""
                    style={{ height: "240px", objectFit: "contain" }}
                  />
                }
                key={index}
              >
               <Meta title={nft.name}
                />       
                <Badge.Ribbon
                  color="green"
                  text={`${
                    () => calculateRUGDReward(nft.addrs).data / ("1e" + 18)
                  } ${"RUGD"}`}
                  
                ></Badge.Ribbon>
              </Card>
            ))}

          {inputValue !== "explore" && 
              checked !== true &&
              NFTTokenIds.slice(0, 20).map((nft, index) => (
              <Card
                hoverable
                onClick={() => handleBurial(nft)}
                actions={[
                  <Tooltip title="View On Blockexplorer">
                    <FileSearchOutlined
                      onClick={() =>
                        window.open(
                          `${getExplorer(chainId)}address/${nft.token_address}`,
                          "_blank"
                        )
                      }
                    />
                  </Tooltip>,
                      <Tooltip title="View On Market Place">
                      <SearchOutlined
                        onClick={() =>
                          window.open(
                            `${getMarketPlace(chainId)}${nft.token_address}/${nft.token_id}`,
                            "_blank"
                          )
                        }
                      />
                      </Tooltip>,
                  <Tooltip title="Bury NFT">
                    <RestOutlined   onClick={() => handleBurial(nft)} />
                  </Tooltip>,
                ]}
                style={{ width: 240, border: "2px solid #e7eaf3" }}
                cover={
                  <Image
                    preview={false}
                    src={nft.image || "error"}
                    fallback={fallbackImg}
                    alt=""
                    style={{ height: "240px", objectFit: "contain" }}
                  />
                }
                key={index}
              >

                <Badge.Ribbon
                  color="green"
                  text={`${
                    RUGDProcessor.data / ("1e" + 18)
                  } ${"RUGD"}`}
                ></Badge.Ribbon>


                {getMarketItem(nft) && (
                  <Badge.Ribbon text="Buy Now" color="green"></Badge.Ribbon>
                )}
                <Meta title={nft.name} description={`#${nft.token_id}`} />
              </Card>
            ))}

              {inputValue !== "explore" && 
              checked === true &&
              GraveBalance.slice(0, 20).map((nft, index) => (
              <Card
                hoverable
                onClick={() => handleBurial(nft)}
                actions={[
                  <Tooltip title="View On Blockexplorer">
                    <FileSearchOutlined
                      onClick={() =>
                        window.open(
                          `${getExplorer(chainId)}address/${nft.token_address}`,
                          "_blank"
                        )
                      }
                    />
                  </Tooltip>,
                    <Tooltip title="View On OpenSea">
                     <SearchOutlined
                      onClick={() =>
                      window.open(
                        `${"https://opensea.io/assets/"}${nft.token_address}/${nft.token_id}`,
                       "_blank"
                        )
                       }
                  />
                   </Tooltip>,
                  <Tooltip title="Bury NFT">
                    <RestOutlined   onClick={() => handleBurial(nft)} />
                  </Tooltip>,
                ]}
                style={{ width: 240, border: "2px solid #e7eaf3" }}
                cover={
                  <Image
                    preview={false}
                    src={nft.image || "error"}
                    fallback={fallbackImg}
                    alt=""
                    style={{ height: "240px", objectFit: "contain" }}
                  />
                }
                key={index}
              >
                {getMarketItem(nft) && (
                  <Badge.Ribbon text="Buy Now" color="green"></Badge.Ribbon>
                )}
                <Meta title={nft.name} description={`#${nft.token_id}`} />
              </Card>
            ))}

        </div>
        {getMarketItem(nftToBury) ? (
          <Modal
            title={`Buy ${nftToBury?.name} #${nftToBury?.token_id}`}
            visible={visible}
            onCancel={() => setVisibility(false)}
            onOk={() => purchase()}
            okText="Buy"
          >
            <Spin spinning={loading}>
              <div
                style={{
                  width: "250px",
                  margin: "auto",
                }}
              >
                <Badge.Ribbon
                  color="green"
                  text={`${
                    getMarketItem(nftToBury).price / ("1e" + 18)
                  } ${nativeName}`}
                >
                  <img
                    src={nftToBury?.image}
                    alt={""}
                    style={{
                      width: "250px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      objectFit: "contain",
                    }}
                  />
                </Badge.Ribbon>
              </div>
            </Spin>
          </Modal>
        ) : (
          <Modal
            title={`Bury ${nftToBury?.name} #${nftToBury?.token_id}`}
            visible={visible}
            onCancel={() => setVisibility(false)}
            onOk={() => burial(nftToBury)}
            okText="Bury"
            footer={[
              <Button onClick={() => setVisibility(false)}>Cancel</Button>,
              <Button
                disabled={isApproved === true}
                onClick={() => setApprovalForAll()}
                type="primary"
              >
                {isApproved ? "Approved" : "Approve"}
              </Button>,
              <Button 
              disabled={isApproved === false}
              onClick={() => burial(nftToBury)} type="primary">
                Bury
              </Button>,
            ]}
          >
            <img
              src={nftToBury?.image}
              alt={""}
              style={{
                width: "250px",
                margin: "auto",
                borderRadius: "10px",
                marginBottom: "15px",
                objectFit: "contain",
              }}
            />
          </Modal>
        )}
      </div>
    </>
  );
}

export default NFTTokenIds;
