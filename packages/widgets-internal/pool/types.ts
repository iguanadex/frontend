import type {
  DeserializedCakeVault,
  DeserializedLockedCakeVault,
  DeserializedLockedVaultUser,
  DeserializedPool,
  DeserializedPoolConfig,
  DeserializedPoolLockedVault,
  DeserializedPoolVault,
  DeserializedVaultFees,
  DeserializedVaultUser,
  PoolCategory,
  PoolConfigBaseProps,
  SerializedPoolConfig,
  SerializedVaultFees,
} from "@iguanadex/pools";
import { VaultKey } from "@iguanadex/pools";
import BigNumber from "bignumber.js";

export {
  DeserializedCakeVault,
  DeserializedLockedCakeVault,
  DeserializedLockedVaultUser,
  DeserializedPool,
  DeserializedPoolConfig,
  DeserializedPoolLockedVault,
  DeserializedPoolVault,
  DeserializedVaultFees,
  DeserializedVaultUser,
  PoolCategory,
  PoolConfigBaseProps,
  SerializedPoolConfig,
  SerializedVaultFees,
  VaultKey,
};

export interface HarvestActionsProps {
  earnings: BigNumber;
  isLoading?: boolean;
  onPresentCollect: any;
  earningTokenPrice: number;
  earningTokenBalance: number;
  earningTokenDollarBalance: number;
  disabledHarvestButton?: boolean;
}
