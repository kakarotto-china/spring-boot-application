package com.myyf.webssh.util;

import cn.hutool.core.collection.CollUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.myyf.webssh.common.Result;
import com.myyf.webssh.entity.User;
import com.myyf.webssh.exception.LoginException;

import java.util.Calendar;
import java.util.Map;
import java.util.Optional;

/**
 * jwt工具
 */
public class JWTUtils {
    private static final String KEY = "SDDF25FG$%6HJK88@34467;KK!E547";

    /**
     * 生产jwt token
     *
     * @param user user
     * @return String
     */
    public static String generateToken(User user) {
        if (user == null) {
            throw new LoginException(Result.CodeEnum.LOGIN_FAIL);
        }
        Map<String, Object> map = CollUtil.newHashMap();
        Calendar instance = Calendar.getInstance();
        instance.add(Calendar.MINUTE, 30);
        return JWT.create()
                .withHeader(map)//添加头部
                .withClaim("id", user.getId())//添加payload
                .withClaim("name", user.getName())
                .withClaim("email", user.getEmail())
                .withClaim("nickname", user.getNickname())
                .withExpiresAt(instance.getTime())//设置过期时间
                .sign(Algorithm.HMAC256(KEY));//设置签名 密钥
    }

    /**
     * 验证并获取user
     *
     * @param token token
     * @return Optional<User>
     */
    public static Optional<User> verify(String token) {
        if (token == null) {
            return Optional.empty();
        }
        try {
            JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(KEY)).build();
            //验证JWT
            DecodedJWT decodedJWT = jwtVerifier.verify(token);
            //获取JWT中的数据,注意数据类型一定要与添加进去的数据类型一致,否则取不到数据
            User user = new User();
            user.setId(decodedJWT.getClaim("id").asLong());
            user.setName(decodedJWT.getClaim("name").asString());
            user.setNickname(decodedJWT.getClaim("nickname").asString());
            user.setEmail(decodedJWT.getClaim("email").asString());
            return Optional.of(user);
        } catch (JWTVerificationException e) {
            throw new LoginException(Result.CodeEnum.UN_LOGIN);
        }
    }

}
