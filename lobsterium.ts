import * as anchor from "@coral-xyz/anchor";

describe("lobsterium", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  it("Program initialized", async () => {
    console.log("Lobsterium ready on Solana 🦞");
  });
});
