import { CROP_CONFIG } from "@cass-modules/GardenConfig";

export const EVENT_CONFIG = {
  WEEKLY_CYCLE: 7 * 24 * 60 * 60 * 1000,
  WEATHER_CYCLE: 1 * 60 * 60 * 1000,
  // LONG ASF
  EVENT_CYCLE: 4 * 60 * 60 * 1000,
  EVENTS: [
    {
      name: "No Event",
      icon: "🌱",
      isNoEvent: true,
      effect: {
        mutationChance: 0.1,
        growthMultiplier: 1,
      },
      shopItems: [],
    },
    {
      name: "Relapse Event",
      icon: "🥀💔",
      timeStart: (12 + 10) * 60 * 60 * 1000,
      timeEnd: 4 * 60 * 60 * 1000,
      shopName: "relapseshop",
      shopName2: "Batak Mag Relapse Shop",
      shopAlias: ["rshop", "relapse", "rsh"],
      effect: {
        mutationChance: 0.25,
        growthMultiplier: 2.5,
        mutationType: "Relapsed",
      },
      shopItems: [
        {
          icon: "🌸",
          name: "Ben&Petal",
          key: "gsBenPetal",
          flavorText: "A delicate flower duo that blooms in harmony.",
          price: 2500,
          rarity: "Common",
          stockLimit: 20,
          stockChance: 1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsBenPetal",
              name: "Ben&Petal",
              flavorText: "A delicate flower duo that blooms in harmony.",
              icon: "🌸",
              type: "gardenSeed",
              sellPrice: 1250,
              cropData: {
                baseValue: 2000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 2,
                harvests: 3,
              },
            });
          },
        },
        {
          icon: "🍇",
          name: "Di na Muliberry",
          key: "gsMuliberry",
          flavorText: "A bittersweet berry that lingers on the vine.",
          price: 5000,
          stockLimit: 20,
          rarity: "Uncommon",
          stockChance: 1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsMuliberry",
              name: "Di na Muliberry",
              flavorText: "A bittersweet berry that lingers on the vine.",
              icon: "🍇",
              type: "gardenSeed",
              sellPrice: 2500,
              cropData: {
                baseValue: 2_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 3,
                harvests: 4,
              },
            });
          },
        },
        {
          icon: "🌿",
          name: "Magbalikweed",
          key: "gsMagbalikweed",
          flavorText: "A resilient herb that always finds its way back.",
          price: 10_000,
          rarity: "Uncommon",
          stockLimit: 20,

          stockChance: 1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsMagbalikweed",
              name: "Magbalikweed",
              flavorText: "A resilient herb that always finds its way back.",
              icon: "🌿",
              type: "gardenSeed",
              sellPrice: 5000,
              cropData: {
                baseValue: 5_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 4,
                harvests: 5,
              },
            });
          },
        },
        {
          icon: "🌺",
          name: "Pagsamunngo",
          key: "gsPagsamunngo",
          stockLimit: 20,

          flavorText: "A vibrant flower symbolizing reunion.",
          price: 50_000,
          rarity: "Rare",
          stockChance: 0.5,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsPagsamunngo",
              name: "Pagsamunngo",
              flavorText: "A vibrant flower symbolizing reunion.",
              icon: "🌺",
              type: "gardenSeed",
              sellPrice: 25_000,
              cropData: {
                baseValue: 10_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 5,
                harvests: 8,
              },
            });
          },
        },
        {
          icon: "🌱",
          name: "Binhi mo lang ako",
          key: "gsBinhi",
          flavorText: "A humble seed with untapped potential.",
          price: 100_000,
          stockLimit: 12,

          rarity: "Rare",
          stockChance: 0.35,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsBinhi",
              name: "Binhi mo lang ako",
              flavorText: "A humble seed with untapped potential.",
              icon: "🌱",
              type: "gardenSeed",
              sellPrice: 50_000,
              cropData: {
                baseValue: 20_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 6,
                harvests: 8,
              },
            });
          },
        },
        {
          icon: "🍃",
          name: "Kathang Leafip",
          key: "gsLeafip",
          stockLimit: 12,

          flavorText: "A mythical leaf woven from stories.",
          price: 250_000,
          rarity: "Legendary",
          stockChance: 0.5,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsLeafip",
              name: "Kathang Leafip",
              flavorText: "A mythical leaf woven from stories.",
              icon: "🍃",
              type: "gardenSeed",
              sellPrice: 125_000,
              cropData: {
                baseValue: 50_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 7,
                harvests: 8,
              },
            });
          },
        },
        {
          icon: "🧅",
          name: "Allium Too Well",
          key: "gsAllium",
          flavorText: "An onion that brings tears of nostalgia.",
          price: 500_000,
          stockLimit: 5,

          rarity: "Legendary",
          stockChance: 0.25,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsAllium",
              name: "Allium Too Well",
              flavorText: "An onion that brings tears of nostalgia.",
              icon: "🧅",
              type: "gardenSeed",
              sellPrice: 250_000,
              cropData: {
                baseValue: 700_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 8,
                harvests: 1,
              },
            });
          },
        },
        {
          icon: "🌷",
          name: "Lavendeja Vu",
          key: "gsLavendeja",
          flavorText: "A lavender with a hauntingly familiar scent.",
          price: 1_000_000,
          stockLimit: 9,

          rarity: "Legendary",
          stockChance: 0.09,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsLavendeja",
              name: "Lavendeja Vu",
              flavorText: "A lavender with a hauntingly familiar scent.",
              icon: "🌷",
              type: "gardenSeed",
              sellPrice: 500_000,
              cropData: {
                baseValue: 100_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 9,
                harvests: 18,
              },
            });
          },
        },
        {
          icon: "☘️",
          name: "When I was your clover",
          key: "gsClover",
          stockLimit: 20,

          flavorText: "A four-leaf clover of past promises.",
          price: 2_500_000,
          rarity: "Mythical",
          stockChance: 0.07,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsClover",
              name: "When I was your clover",
              flavorText: "A four-leaf clover of past promises.",
              icon: "☘️",
              type: "gardenSeed",
              sellPrice: 1_250_000,
              cropData: {
                baseValue: 500_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 10,
                harvests: 9,
              },
            });
          },
        },
        {
          icon: "🌿✨",
          name: "Enchanmint",
          key: "gsEnchanmint",
          stockLimit: 5,

          flavorText: "A magical mint that captivates the senses.",
          price: 5_000_000,
          rarity: "Mythical",
          stockChance: 0.08,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsEnchanmint",
              name: "Enchanmint",
              flavorText: "A magical mint that captivates the senses.",
              icon: "🌿✨",
              type: "gardenSeed",
              sellPrice: 2_500_000,
              cropData: {
                baseValue: 500_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 11,
                harvests: 25,
              },
            });
          },
        },
        {
          icon: "🌱",
          name: "Kathang Sitaw",
          key: "gsSitaw",
          stockLimit: 12,

          flavorText: "A string bean spun from tales of fate.",
          price: 10_000_000,
          rarity: "Divine",
          stockChance: 0.08,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsSitaw",
              name: "Kathang Sitaw",
              flavorText: "A string bean spun from tales of fate.",
              icon: "🌱",
              type: "gardenSeed",
              sellPrice: 5_000_000,
              cropData: {
                baseValue: 1_000_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 12,
                harvests: 30,
              },
            });
          },
        },
        {
          icon: "🌸💫",
          name: "Pinagtagpo, Pero Hindi Tinanamin",
          key: "gsPinagtagpo",
          flavorText: "The rarest bloom of destined but unplanted love.",
          price: 50_000_000,
          rarity: "Divine",
          stockLimit: 5,

          stockChance: 0.08,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsPinagtagpo",
              name: "Pinagtagpo, Pero Hindi Tinanamin",
              flavorText: "The rarest bloom of destined but unplanted love.",
              icon: "🌸💫",
              type: "gardenSeed",
              sellPrice: 25_000_000,
              cropData: {
                baseValue: 4_000_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 15,
                harvests: 40,
              },
            });
          },
        },
      ],
    },
    {
      name: "Frost",
      icon: "❄️",
      effect: {
        mutationChance: 0.3,
        growthMultiplier: 0.9,
        mutationType: "Chilled",
      },
      shopItems: [],
    },
    {
      name: "Thunderstorm",
      icon: "⛈️",
      effect: {
        mutationChance: 0.1,
        growthMultiplier: 1.5,
        mutationType: "Shocked",
      },
      shopItems: [],
    },

    {
      name: "Easter Event 2025",
      icon: "🐣",
      shopName: "eastershop",
      shopName2: "Poppy's Easter Shop",
      shopAlias: ["easter", "eash"],
      effect: {
        mutationChance: 0.3,
        growthMultiplier: 1.2,
        mutationType: "Chocolate",
      },
      shopItems: [
        {
          icon: "🍫",
          name: "Chocolate Carrot Seed",
          key: "gsChocoCarrot",
          flavorText: "A sweet carrot from the Easter Event!",
          price: 10_000,
          stockLimit: 20,

          rarity: "Common",
          stockChance: 1.0,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsChocoCarrot",
              name: "Chocolate Carrot Seed",
              flavorText: "A sweet carrot from the Easter Event.",
              icon: "🍫",
              type: "gardenSeed",
              sellPrice: 100,
              cropData: {
                baseValue: 16_500,
                growthTime: CROP_CONFIG.GROWTH_BASE * 0.5,
                harvests: 1,
              },
            });
          },
        },
        {
          icon: "🍭",
          name: "Red Lollipop Seed",
          key: "gsRedLollipop",
          flavorText: "A sugary treat from the Easter Event.",
          price: 45_000,
          rarity: "Uncommon",
          stockLimit: 18,

          stockChance: 0.5,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsRedLollipop",
              name: "Red Lollipop Seed",
              flavorText: "A sugary treat from the Easter Event.",
              icon: "🍭",
              type: "gardenSeed",
              sellPrice: 250,
              cropData: {
                baseValue: 70_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 2,
                harvests: 1,
              },
            });
          },
        },
        {
          icon: "🌻",
          name: "Candy Sunflower Seed",
          key: "gsCandySunflower",
          flavorText: "A radiant flower from the Easter Event.",
          price: 75_000,
          stockLimit: 14,
          rarity: "Rare",
          stockChance: 0.5,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsCandySunflower",
              name: "Candy Sunflower Seed",
              flavorText: "A radiant flower from the Easter Event.",
              icon: "🌻",
              type: "gardenSeed",
              sellPrice: 600,
              cropData: {
                baseValue: 145_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 2.5,
                harvests: 1,
              },
            });
          },
        },
        {
          icon: "🥚",
          name: "Easter Egg Seed",
          key: "gsEasterEgg",
          flavorText: "A festive egg from the Easter Event.",
          price: 500_000,
          rarity: "Legendary",
          stockChance: 0.3,
          stockLimit: 7,

          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsEasterEgg",
              name: "Easter Egg Seed",
              flavorText: "A festive egg from the Easter Event.",
              icon: "🥚",
              type: "gardenSeed",
              sellPrice: 1500,
              cropData: {
                baseValue: 60_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 3,
                harvests: 10,
              },
            });
          },
        },
        {
          icon: "🌸",
          name: "Candy Blossom Seed",
          key: "gsCandyBlossom",
          flavorText: "A divine bloom from the Easter Event.",
          price: 10_000_000,
          rarity: "Divine",
          stockLimit: 5,

          stockChance: 0.04,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsCandyBlossom",
              name: "Candy Blossom Seed",
              flavorText: "A divine bloom from the Easter Event.",
              icon: "🌸",
              type: "gardenSeed",
              sellPrice: 3000,
              cropData: {
                baseValue: 1_200_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 11,
                harvests: 12,
              },
            });
          },
        },
        {
          icon: "🍫💦",
          name: "Chocolate Sprinkler",
          key: "gtChocoSprinkler",
          flavorText: "Boosts Chocolate mutations for Easter crops.",
          price: 1_000_000,
          stockLimit: 1,

          rarity: "Rare",
          stockChance: 0.4,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gtChocoSprinkler",
              name: "Chocolate Sprinkler",
              flavorText: "Boosts Chocolate mutations for Easter crops.",
              icon: "🍫💦",
              type: "gardenTool",
              sellPrice: 500,
              toolData: {
                growthMultiplier: 1.2,
                mutationChance: { Chocolate: 0.3 },
              },
            });
          },
        },
      ],
    },
    {
      name: "Angry Plant Event",
      icon: "🌿😣",
      shopName2: "Angry Shop",
      shopName: "angryshop",
      shopAlias: ["ashop", "angshop", "angry"],
      effect: {
        growthMultiplier: 1.1,
      },
      shopItems: [
        // {
        //   icon: "🪷",
        //   name: "Lotus Seed",
        //   key: "gsLotus",
        //   flavorText: "A rare seed available during Angry Plant Event!",
        //   price: 500,
        //   rarity: "Divine",
        //   stockChance: 0.1,
        //   inStock: true,
        //   onPurchase({ moneySet }) {
        //     moneySet.inventory.push({
        //       key: "gsLotus",
        //       name: "Lotus Seed",
        //       flavorText: "A rare seed from Angry Plant Event.",
        //       icon: "🪷",
        //       type: "gardenSeed",
        //       sellPrice: 250,
        //       cropData: {
        //         baseValue: 1000,
        //         growthTime: CROP_CONFIG.GROWTH_BASE * 3,
        //         harvests: 1,
        //       },
        //     });
        //   },
        // },
        {
          icon: "🍒",
          name: "Cranberry Seed",
          key: "gsCranberry",
          flavorText: "A tart fruit from the Angry Plant Event.",
          price: 3500,
          rarity: "Legendary",
          stockChance: 0.3,
          inStock: true,
          stockLimit: 20,

          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsCranberry",
              name: "Cranberry Seed",
              flavorText: "A tart fruit from the Angry Plant Event.",
              icon: "🍒",
              type: "gardenSeed",
              sellPrice: 1750,
              cropData: {
                baseValue: 7000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 3.5,
                harvests: 2,
              },
            });
          },
        },
        {
          icon: "🥭",
          name: "Durian Seed",
          key: "gsDurian",
          flavorText: "A pungent fruit from the Angry Plant Event.",
          price: 4000,
          rarity: "Legendary",
          stockLimit: 20,

          stockChance: 0.25,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsDurian",
              name: "Durian Seed",
              flavorText: "A pungent fruit from the Angry Plant Event.",
              icon: "🥭",
              type: "gardenSeed",
              sellPrice: 2000,
              cropData: {
                baseValue: 8000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 3.5,
                harvests: 2,
              },
            });
          },
        },
        {
          icon: "🍆",
          name: "Eggplant Seed",
          key: "gsEggplant",
          flavorText: "A versatile veggie from the Angry Plant Event.",
          price: 5000,
          stockLimit: 7,

          rarity: "Mythical",
          stockChance: 0.2,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsEggplant",
              name: "Eggplant Seed",
              flavorText: "A versatile veggie from the Angry Plant Event.",
              icon: "🍆",
              type: "gardenSeed",
              sellPrice: 2500,
              cropData: {
                baseValue: 10000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 4,
                harvests: 2,
              },
            });
          },
        },
        {
          icon: "🪷",
          name: "Lotus Seed",
          key: "gsLotus",
          flavorText: "A serene flower from the Angry Plant Event.",
          price: 60_000,
          stockLimit: 12,

          rarity: "Divine",
          stockChance: 0.15,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsLotus",
              name: "Lotus Seed",
              flavorText: "A serene flower from the Angry Plant Event.",
              icon: "🪷",
              type: "gardenSeed",
              sellPrice: 3000,
              cropData: {
                baseValue: 20_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 4,
                harvests: 5,
              },
            });
          },
        },
        {
          icon: "🪴",
          name: "Venus Fly Trap Seed",
          key: "gsVenusFlyTrap",
          flavorText: "A carnivorous plant from the Angry Plant Event.",
          price: 6500,
          stockLimit: 12,

          rarity: "Divine",
          stockChance: 0.1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsVenusFlyTrap",
              name: "Venus Fly Trap Seed",
              flavorText: "A carnivorous plant from the Angry Plant Event.",
              icon: "🪴",
              type: "gardenSeed",
              sellPrice: 3250,
              cropData: {
                baseValue: 17000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 4.5,
                harvests: 1,
              },
            });
          },
        },
        // {
        //   icon: "🌱",
        //   name: "Basic Seed Pack",
        //   key: "gtBasicSeedPack",
        //   flavorText: "A pack of basic seeds from the Angry Plant Event.",
        //   price: 500,
        //   rarity: "Common",
        //   stockChance: 0.8,
        //   inStock: true,
        //   onPurchase({ moneySet }) {
        //     moneySet.inventory.push({
        //       key: "gtBasicSeedPack",
        //       name: "Basic Seed Pack",
        //       flavorText: "A pack of basic seeds from the Angry Plant Event.",
        //       icon: "🌱",
        //       type: "gardenTool",
        //       sellPrice: 250,
        //       toolData: {
        //         seedTypes: ["gsCarrot", "gsStrawberry", "gsBlueberry"],
        //       },
        //     });
        //   },
        // },
        // {
        //   icon: "🌟",
        //   name: "Premium Seed Pack",
        //   key: "gtPremiumSeedPack",
        //   flavorText:
        //     "A pack of premium seeds with a chance for rainbow sacks.",
        //   price: 1500,
        //   rarity: "Rare",
        //   stockChance: 0.4,
        //   inStock: true,
        //   onPurchase({ moneySet }) {
        //     moneySet.inventory.push({
        //       key: "gtPremiumSeedPack",
        //       name: "Premium Seed Pack",
        //       flavorText:
        //         "A pack of premium seeds with a chance for rainbow sacks.",
        //       icon: "🌟",
        //       type: "gardenTool",
        //       sellPrice: 750,
        //       toolData: {
        //         seedTypes: ["gsTomato", "gsWatermelon", "gsOrangeTulip"],
        //       },
        //     });
        //   },
        // },
      ],
    },
    {
      name: "Lunar Glow Event",
      icon: "🌙",
      shopName: "twilightshop",
      shopName2: "Twilight Shop",
      shopAlias: ["tshop", "twilight", "tsh"],
      effect: {
        mutationChance: 0.3,
        growthMultiplier: 1.3,
        mutationType: "Moonlit",
      },
      shopItems: [
        {
          icon: "🌙",
          name: "Moonflower Seed",
          key: "gsMoonflower",
          flavorText: "Rare flower blooming under moonlight.",
          price: 80_000,
          rarity: "Legendary",
          stockChance: 0.2,
          stockLimit: 15,

          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsMoonflower",
              name: "Moonflower Seed",
              flavorText: "Rare flower blooming under moonlight.",
              icon: "🌙",
              type: "gardenSeed",
              sellPrice: 4000,
              cropData: {
                baseValue: 8500,
                growthTime: CROP_CONFIG.GROWTH_BASE * 8.5,
                harvests: 20,
              },
            });
          },
        },
        {
          icon: "🍃",
          name: "Mint Seed",
          key: "gsMint",
          flavorText: "Refreshing herb with culinary uses.",
          price: 2200,
          stockLimit: 20,

          rarity: "Rare",
          stockChance: 0.5,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsMint",
              name: "Mint Seed",
              flavorText: "Refreshing herb with culinary uses.",
              icon: "🍃",
              type: "gardenSeed",
              sellPrice: 1100,
              cropData: {
                baseValue: 4400,
                growthTime: CROP_CONFIG.GROWTH_BASE * 2,
                harvests: 2,
              },
            });
          },
        },
        {
          icon: "🍄",
          name: "Glowshroom Seed",
          key: "gsGlowshroom",
          flavorText: "Bioluminescent mushroom with unique glow.",
          price: 3000,
          rarity: "Rare",
          stockLimit: 20,

          stockChance: 0.4,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsGlowshroom",
              name: "Glowshroom Seed",
              flavorText: "Bioluminescent mushroom with unique glow.",
              icon: "🍄",
              type: "gardenSeed",
              sellPrice: 1500,
              cropData: {
                baseValue: 6000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 3,
                harvests: 2,
              },
            });
          },
        },
        {
          icon: "🌟",
          name: "Starfruit Seed",
          stockLimit: 12,

          key: "gsStarfruit",
          flavorText: "A radiant fruit from the Lunar Glow Event.",
          price: 140_000,
          rarity: "Legendary",
          stockChance: 0.3,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsStarfruit",
              name: "Starfruit Seed",
              flavorText: "A radiant fruit from the Lunar Glow Event.",
              icon: "🌟",
              type: "gardenSeed",
              sellPrice: 1750,
              cropData: {
                baseValue: 14000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 3.5,
                harvests: 15,
              },
            });
          },
        },
        {
          icon: "🌼",
          name: "Moonglow Seed",
          key: "gsMoonglow",
          flavorText: "A glowing flower from the Lunar Glow Event.",
          price: 180_000,
          stockLimit: 10,

          rarity: "Legendary",
          stockChance: 0.25,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsMoonglow",
              name: "Moonglow Seed",
              flavorText: "A glowing flower from the Lunar Glow Event.",
              icon: "🌼",
              type: "gardenSeed",
              sellPrice: 2000,
              cropData: {
                baseValue: 18_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 9.5,
                harvests: 20,
              },
            });
          },
        },
        {
          icon: "🌸",
          name: "Moon Blossom Seed",
          key: "gsMoonBlossom",
          stockLimit: 5,

          flavorText: "A divine bloom from the Lunar Glow Event.",
          price: 600_000,
          rarity: "Divine",
          stockChance: 0.15,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsMoonBlossom",
              name: "Moon Blossom Seed",
              flavorText: "A divine bloom from the Lunar Glow Event.",
              icon: "🌸",
              type: "gardenSeed",
              sellPrice: 3000,
              cropData: {
                baseValue: 45_125,
                growthTime: CROP_CONFIG.GROWTH_BASE * 4,
                harvests: 30,
              },
            });
          },
        },
        {
          icon: "🫐",
          name: "Celestiberry Seed",
          key: "gsCelestiberry",
          flavorText: "A celestial berry from the Lunar Glow Event.",
          price: 15_000_000,
          stockLimit: 5,

          rarity: "Mythical",
          stockChance: 0.2,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsCelestiberry",
              name: "Celestiberry Seed",
              flavorText: "A celestial berry from the Lunar Glow Event.",
              icon: "🫐",
              type: "gardenSeed",
              sellPrice: 10_000_000,
              cropData: {
                baseValue: 10_000_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 7.7,
                harvests: 2,
              },
            });
          },
        },
        {
          icon: "🥭",
          name: "Moon Mango Seed",
          key: "gsMoonMango",
          stockLimit: 5,

          flavorText: "A tropical fruit from the Lunar Glow Event.",
          price: 1_000_000_000,
          rarity: "Mythical",
          stockChance: 0.01,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsMoonMango",
              name: "Moon Mango Seed",
              flavorText: "A tropical fruit from the Lunar Glow Event.",
              icon: "🥭",
              type: "gardenSeed",
              sellPrice: 1_000_000_000,
              cropData: {
                baseValue: 100_000_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 30.5,
                harvests: 12,
              },
            });
          },
        },
        {
          icon: "🌑",
          name: "Nightshade Seed",
          key: "gsNightshade",
          stockLimit: 20,

          flavorText: "A mysterious crop from the Lunar Glow Event.",
          price: 4500,
          rarity: "Legendary",
          stockChance: 0.25,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsNightshade",
              name: "Nightshade Seed",
              flavorText: "A mysterious crop from the Lunar Glow Event.",
              icon: "🌑",
              type: "gardenSeed",
              sellPrice: 2250,
              cropData: {
                baseValue: 9000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 3.5,
                harvests: 2,
              },
            });
          },
        },
        {
          icon: "🦔",
          name: "Hedgehog",
          stockLimit: 1,
          key: "gpHedgehog",
          flavorText: "A spiky pet from the Lunar Glow Event.",
          price: 2000000,
          rarity: "Uncommon",
          stockChance: 0.6,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpHedgehog",
              name: "Hedgehog",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🦔",
              type: "gardenPetCage",
              sellPrice: 100000,
              petData: {
                name: "Hedgehog",
                collectionRate: 0.1,
                seedTypes: ["gsMoonflower", "gsMint", "gsGlowshroom"],
              },
            });
          },
        },
        {
          icon: "🐹",
          name: "Mole",
          key: "gpMole",
          flavorText: "A digging pet from the Lunar Glow Event.",
          price: 2500000,
          stockLimit: 1,

          rarity: "Uncommon",
          stockChance: 0.5,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpMole",
              name: "Mole",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🐹",
              type: "gardenPetCage",
              sellPrice: 12500,
              petData: {
                name: "Mole",
                collectionRate: 0.1,
                seedTypes: ["gsStarfruit", "gsMoonglow", "gsNightshade"],
              },
            });
          },
        },
        {
          icon: "🐸",
          name: "Frog",
          key: "gpFrog",
          flavorText: "A hopping pet from the Lunar Glow Event.",
          price: 2000000,
          rarity: "Uncommon",
          stockLimit: 1,

          stockChance: 0.01,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpFrog",
              name: "Frog",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🐸",
              type: "gardenPetCage",
              sellPrice: 1000000,
              petData: {
                name: "Frog",
                collectionRate: 0.1,
                seedTypes: ["gsMoonBlossom", "gsBloodBanana", "gsMoonMelon"],
              },
            });
          },
        },
        {
          icon: "🐸🌙",
          name: "Echo Frog",
          key: "gpEchoFrog",
          flavorText: "A mystical frog from the Lunar Glow Event.",
          price: 3000000,
          rarity: "Rare",
          stockChance: 0.001,
          stockLimit: 1,

          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpEchoFrog",
              name: "Echo Frog",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🐸🌙",
              type: "gardenPetCage",
              sellPrice: 150000,
              petData: {
                name: "Echo Frog",
                collectionRate: 0.15,
                seedTypes: ["gsCelestiberry", "gsMoonMango"],
              },
            });
          },
        },
        {
          icon: "🦇",
          name: "Night Owl",
          key: "gpNightOwl",
          flavorText: "A nocturnal pet from the Lunar Glow Event.",
          price: 3500000,
          stockLimit: 1,

          rarity: "Rare",
          stockChance: 0.1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpNightOwl",
              name: "Night Owl",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🦇",
              type: "gardenPetCage",
              sellPrice: 1750000,
              petData: {
                name: "Night Owl",
                collectionRate: 0.15,
                seedTypes: ["gsMoonflower", "gsMoonglow", "gsMoonBlossom"],
              },
            });
          },
        },
        {
          icon: "🦝",
          name: "Raccoon",
          key: "gpRaccoon",
          flavorText: "A sneaky pet from the Lunar Glow Event.",
          price: 3000000,
          stockLimit: 1,

          rarity: "Rare",
          stockChance: 0.1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpRaccoon",
              name: "Raccoon",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🦝",
              type: "gardenPetCage",
              sellPrice: 150000,
              petData: {
                name: "Raccoon",
                collectionRate: 0.15,
                seedTypes: ["gsBloodBanana", "gsMoonMelon", "gsCelestiberry"],
              },
            });
          },
        },
        {
          icon: "🥝",
          name: "Kiwi",
          stockLimit: 1,

          key: "gpKiwi",
          flavorText: "A fuzzy pet from the Lunar Glow Event.",
          price: 4000000,
          rarity: "Legendary",
          stockChance: 0.0002,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpKiwi",
              name: "Kiwi",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🥝",
              type: "gardenPetCage",
              sellPrice: 200000,
              petData: {
                name: "Kiwi",
                collectionRate: 0.01,
                seedTypes: ["gsMoonMango", "gsNightshade"],
              },
            });
          },
        },
        {
          icon: "🦉",
          name: "Owl",
          key: "gpOwl",
          flavorText: "A wise pet from the Lunar Glow Event.",
          price: 5000000,
          stockLimit: 1,

          rarity: "Legendary",
          stockChance: 0.15,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpOwl",
              name: "Owl",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🦉",
              type: "gardenPetCage",
              sellPrice: 250000,
              petData: {
                name: "Owl",
                collectionRate: 0.2,
                seedTypes: ["gsMoonflower", "gsStarfruit", "gsMoonglow"],
              },
            });
          },
        },
        {
          icon: "🥝🌑",
          name: "Blood Kiwi",
          stockLimit: 1,

          key: "gpBloodKiwi",
          flavorText: "A rare pet from the Lunar Glow Event.",
          price: 6000000,
          rarity: "Mythical",
          stockChance: 0.1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpBloodKiwi",
              name: "Blood Kiwi",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🥝🌑",
              type: "gardenPetCage",
              sellPrice: 300000,
              petData: {
                name: "Blood Kiwi",
                collectionRate: 0.25,
                seedTypes: ["gsBloodBanana", "gsMoonMelon"],
              },
            });
          },
        },
        {
          icon: "🦔🌑",
          name: "Blood Hedgehog",
          key: "gpBloodHedgehog",
          flavorText: "A fierce pet from the Lunar Glow Event.",
          price: 6000000,
          stockLimit: 1,

          rarity: "Mythical",
          stockChance: 0.0001,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpBloodHedgehog",
              name: "Blood Hedgehog",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🦔🌑",
              type: "gardenPetCage",
              sellPrice: 300000,
              petData: {
                name: "Blood Hedgehog",
                collectionRate: 0.025,
                seedTypes: ["gsCelestiberry", "gsMoonMango"],
              },
            });
          },
        },
        {
          icon: "🦉🌑",
          name: "Blood Owl",
          stockLimit: 1,

          key: "gpBloodOwl",
          flavorText: "A mystical pet from the Lunar Glow Event.",
          price: 6500000,
          rarity: "Mythical",
          stockChance: 0.1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpBloodOwl",
              name: "Blood Owl",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🦉🌑",
              type: "gardenPetCage",
              sellPrice: 325000,
              petData: {
                name: "Blood Owl",
                collectionRate: 0.25,
                seedTypes: ["gsMoonflower", "gsMoonglow"],
              },
            });
          },
        },
        {
          icon: "🐔💀",
          name: "Chicken Zombie",
          stockLimit: 1,

          key: "gpChickenZombie",
          flavorText: "A spooky pet from the Lunar Glow Event.",
          price: 7000000,
          rarity: "Divine",
          stockChance: 0.05,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gpChickenZombie",
              name: "Chicken Zombie",
              flavorText: "Caged pet. Uncage to dig up Lunar seeds!",
              icon: "🐔💀",
              type: "gardenPetCage",
              sellPrice: 3500,
              petData: {
                name: "Chicken Zombie",
                collectionRate: 0.3,
                seedTypes: ["gsNightshade", "gsMoonBlossom"],
              },
            });
          },
        },
        {
          icon: "🌟",
          name: "Night Staff",
          key: "gtNightStaff",
          stockLimit: 1,

          flavorText: "Boosts Moonlit mutations for Lunar crops.",
          price: 1500,
          rarity: "Rare",
          stockChance: 0.4,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gtNightStaff",
              name: "Night Staff",
              flavorText: "Boosts Moonlit mutations for Lunar crops.",
              icon: "🌟",
              type: "gardenTool",
              sellPrice: 750,
              toolData: {
                growthMultiplier: 1.3,
                mutationChance: { Moonlit: 0.3 },
              },
            });
          },
        },
        {
          icon: "🥚🌙",
          name: "Night Egg",
          key: "gtNightEgg",
          stockLimit: 0.3,

          flavorText: "A mysterious egg from the Lunar Glow Event.",
          price: 1000,
          rarity: "Uncommon",
          stockChance: 0.5,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gtNightEgg",
              name: "Night Egg",
              flavorText: "A mysterious egg from the Lunar Glow Event.",
              icon: "🥚🌙",
              type: "gardenTool",
              sellPrice: 500,
              toolData: { growthMultiplier: 1.1 },
            });
          },
        },

        // {
        //   icon: "📦",
        //   name: "Mysterious Crate",
        //   key: "gtMysteriousCrate",
        //   flavorText: "A crate of surprises from the Lunar Glow Event.",
        //   price: 2500,
        //   rarity: "Rare",
        //   stockChance: 0.3,
        //   inStock: true,
        //   onPurchase({ moneySet }) {
        //     moneySet.inventory.push({
        //       key: "gtMysteriousCrate",
        //       name: "Mysterious Crate",
        //       flavorText: "A crate of surprises from the Lunar Glow Event.",
        //       icon: "📦",
        //       type: "gardenTool",
        //       sellPrice: 1250,
        //       toolData: {
        //         seedTypes: ["gsMoonflower", "gsStarfruit", "gsMoonglow"],
        //       },
        //     });
        //   },
        // },
        // {
        //   icon: "🌱🌙",
        //   name: "Night Seed Pack",
        //   key: "gtNightSeedPack",
        //   flavorText: "A pack of lunar seeds from the Lunar Glow Event.",
        //   price: 1500,
        //   rarity: "Rare",
        //   stockChance: 0.4,
        //   inStock: true,
        //   onPurchase({ moneySet }) {
        //     moneySet.inventory.push({
        //       key: "gtNightSeedPack",
        //       name: "Night Seed Pack",
        //       flavorText: "A pack of lunar seeds from the Lunar Glow Event.",
        //       icon: "🌱🌙",
        //       type: "gardenTool",
        //       sellPrice: 750,
        //       toolData: {
        //         seedTypes: ["gsMoonBlossom", "gsBloodBanana", "gsMoonMelon"],
        //       },
        //     });
        //   },
        // },
      ],
    },
    {
      name: "Blood Moon",
      icon: "🌑",
      shopName: "bloodmoonshop",
      shopAlias: ["bmsh", "bmshop", "moonshop"],
      shopName2: "Blood Moon Shop",
      effect: {
        mutationChance: 0.2,
        growthMultiplier: 0.8,
        mutationType: "Bloodlit",
      },
      shopItems: [
        {
          icon: "🍌",
          name: "Blood Banana Seed",
          key: "gsBloodBanana",
          flavorText: "A rare fruit from the Blood Moon Event.",
          price: 200_000,
          rarity: "Mythical",
          stockLimit: 18,

          stockChance: 0.1,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsBloodBanana",
              name: "Blood Banana Seed",
              flavorText: "A rare fruit from the Blood Moon Event.",
              icon: "🍌",
              type: "gardenSeed",
              sellPrice: 150_000,
              cropData: {
                baseValue: 150_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 7,
                harvests: 2,
              },
            });
          },
        },
        {
          icon: "🍈",
          name: "Moon Melon Seed",
          key: "gsMoonMelon",
          flavorText: "A juicy melon from the Lunar Blood Moon Event.",
          price: 500_000,
          rarity: "Mythical",
          stockLimit: 9,

          stockChance: 0.05,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsMoonMelon",
              name: "Moon Melon Seed",
              flavorText: "A juicy melon from the Lunar Blood Moon Event.",
              icon: "🍈",
              type: "gardenSeed",
              sellPrice: 20_000,
              cropData: {
                baseValue: 10400,
                growthTime: CROP_CONFIG.GROWTH_BASE * 7,
                harvests: 30,
              },
            });
          },
        },
        {
          icon: "📡",
          name: "Star Caller",
          key: "gtStarCaller",
          flavorText: "Enhances Celestial mutations for Blood Moon crops.",
          price: 2000,
          stockLimit: 1,

          rarity: "Rare",
          stockChance: 0.3,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gtStarCaller",
              name: "Star Caller",
              flavorText: "Enhances Celestial mutations for Blood Moon crops.",
              icon: "📡",
              type: "gardenTool",
              sellPrice: 1000,
              toolData: {
                growthMultiplier: 1.2,
                mutationChance: { Celestial: 0.2 },
              },
            });
          },
        },
        {
          icon: "🌹",
          name: "Blood Rose Seed",
          key: "gsBloodRose",
          stockLimit: 12,

          flavorText: "A rare seed available during Blood Moon!",
          price: 250_000,
          rarity: "Divine",
          stockChance: 0.4,
          inStock: true,
          onPurchase({ moneySet }) {
            moneySet.inventory.push({
              key: "gsBloodRose",
              name: "Blood Rose Seed",
              flavorText: "A rare seed from Blood Moon.",
              icon: "🌹",
              type: "gardenSeed",
              sellPrice: 125_000,
              cropData: {
                baseValue: 125_000,
                growthTime: CROP_CONFIG.GROWTH_BASE * 9,
                harvests: 3,
              },
            });
          },
        },
      ],
    },
    {
      name: "Rainy Days",
      icon: "☔",
      effect: {
        mutationChance: 0.3,
        growthMultiplier: 1.5,
        mutationType: "Wet",
      },
      shopItems: [],
    },
  ],
};
