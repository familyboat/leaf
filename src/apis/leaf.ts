/**
 * 和叶子相关的接口
 */

import api from ".";
import { LeafType } from "../pages/leaves";
import { getToken } from "./auth";

/**
 * 创建一个新叶子
 */
export async function createLeaf(leaf: {title: string, content: string}) {
  const token = getToken();
  return api.post('/leaves', leaf, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
}

/**
 * 获取所有的叶子
 */
export async function getLeaves(params: {cursor?: string, limit: number}): Promise<Array<LeafType>> {
  const token = getToken();
  const resp = await api.get('/leaves', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    params,
  })

  return resp.data.leaves;
}
