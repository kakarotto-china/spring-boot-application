package com.example.util;

import com.example.model.AtField;

import lombok.NonNull;

import java.lang.annotation.Annotation;
import java.lang.reflect.AccessibleObject;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 类操作工具类
 * 
 */
public class ClassUtil {
	/**
	 * 实例化对象
	 * 
	 * @param <T>   对象类型
	 * @param clazz 对象的类
	 * @param args  参数列表
	 * @return 对象实例
	 */
	public static <T> T newInstance(Class<T> clazz, Object... args) {
		Class<?>[] parameterTypes = toParameterTypes(args);
		try {
			Constructor<T> constructor = clazz.getDeclaredConstructor(parameterTypes);
			return constructor.newInstance(args);
		} catch (NoSuchMethodException | SecurityException | InstantiationException | IllegalAccessException
				| IllegalArgumentException | InvocationTargetException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 反射方式执行方法
	 * 
	 * @param <T>        方法返回值类型
	 * @param clazz      类
	 * @param methodName 方法名
	 * @param args       参数列表
	 * @return 方法返回值
	 */
	public static <T> T invokeMethod(Class<?> clazz, String methodName, Object... args) {
		return invokeMethod(clazz, null, methodName, args);
	}

	/**
	 * 反射方式执行方法
	 * 
	 * @param <T>        方法返回值类型
	 * @param obj        实例
	 * @param methodName 方法名
	 * @param args       参数列表
	 * @return 方法返回值
	 */
	public static <T> T invokeMethod(@NonNull Object obj, String methodName, Object... args) {
		return invokeMethod(obj.getClass(), obj, methodName, args);
	}

	/**
	 * 反射方式执行方法
	 * 
	 * @param <T>        方法返回值类型
	 * @param clazz      类
	 * @param obj        实例
	 * @param methodName 方法名
	 * @param args       参数列表
	 * @return 方法返回值
	 */
	public static <T> T invokeMethod(Class<?> clazz, Object obj, String methodName, Object... args) {
		try {
			Method method = clazz.getDeclaredMethod(methodName, toParameterTypes(args));
			method.setAccessible(true);
			return (T) method.invoke(obj, args);
		} catch (NoSuchMethodException | SecurityException | IllegalAccessException | IllegalArgumentException
				| InvocationTargetException e) {
			e.printStackTrace();
		}
		return null;
	}

	private static Class<?>[] toParameterTypes(Object... args) {
		Class<?>[] parameterTypes = new Class[args.length];
		for (int i = 0; i < parameterTypes.length; i++) {
			parameterTypes[i] = args[i].getClass();
		}
		return parameterTypes;
	}

	/**
	 * 检测对象上是否含有注解
	 * 
	 * @param accessibleObject 待检测对象
	 * @param annotationClass  注解类型
	 * @return 是否含有注解
	 */
	public static boolean isAnnotation(AccessibleObject accessibleObject, Class<? extends Annotation> annotationClass) {
		return accessibleObject.isAnnotationPresent(annotationClass);
	}

	/**
	 * 检测属性上是否含有指定注解
	 * 
	 * @param clazz           类
	 * @param fieldName       属性名称
	 * @param annotationClass 注解类型
	 * @return 结果
	 */
	public static boolean isAnnotation(Class<?> clazz, String fieldName, Class<? extends Annotation> annotationClass) {
		try {
			Field field = clazz.getDeclaredField(fieldName);
			return isAnnotation(field, annotationClass);
		} catch (NoSuchFieldException | SecurityException e) {
			e.printStackTrace();
		}
		return false;
	}

	/**
	 * 检测方法是否存在
	 * 
	 * @param clazz          类
	 * @param methodName     方法名称
	 * @param parameterTypes 参数类型列表
	 * @return 结果
	 */
	public static boolean isMethod(Class<?> clazz, String methodName, Class<?>... parameterTypes) {
		Method[] methods = clazz.getMethods();
		for (Method method : methods) {
			Class<?>[] types = method.getParameterTypes();
			return Arrays.equals(types, parameterTypes);
		}
		return false;
	}

	/**
	 * 获取类的指定方法上的指定注解
	 * 
	 * @param <T>             注解类型
	 * @param clazz           类
	 * @param annotationClass 注解类型
	 * @param methodName      方法名称
	 * @param parameterTypes  参数列表
	 * @return 注解对象
	 */
	public static <T extends Annotation> T getAnnotation(Class<?> clazz, Class<T> annotationClass, String methodName,
			Class<?>... parameterTypes) {
		try {
			Method method = clazz.getDeclaredMethod(methodName, parameterTypes);
			if (isAnnotation(method, annotationClass)) {
				return method.getDeclaredAnnotation(annotationClass);
			}
		} catch (NoSuchMethodException | SecurityException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 检测类的指定方法上是否含有指定注解
	 * 
	 * @param clazz           类
	 * @param annotationClass 注解类型
	 * @param methodName      方法名称
	 * @param args            参数列表
	 * @return 结果
	 */
	public static boolean isAnnotation(Class<?> clazz, Class<? extends Annotation> annotationClass, String methodName,
			Object... args) {
		try {
			Method method = clazz.getDeclaredMethod(methodName, toParameterTypes(args));
			return isAnnotation(method, annotationClass);
		} catch (NoSuchMethodException | SecurityException e) {
			e.printStackTrace();
		}
		return false;
	}

	/**
	 * 获取对象上的注解对象
	 * 
	 * @param <T>              注解对象
	 * @param accessibleObject 待获取注解的对象
	 * @param annotationClass  注解类型
	 * @return 注解对象
	 */
	public static <T extends Annotation> T getAnnotation(AccessibleObject accessibleObject, Class<T> annotationClass) {
		if (accessibleObject.isAnnotationPresent(annotationClass)) {
			return accessibleObject.getDeclaredAnnotation(annotationClass);
		}
		return null;
	}

	/**
	 * 获取字段上指定注解的属性值
	 * 
	 * @param <T>             值类型
	 * @param field           字段信息
	 * @param annotationClass 注解类型
	 * @param attributeName   属性名称
	 * @param defaultValue    默认值
	 * @return 属性值
	 */
	public static <T> T getAnnotationValue(AtField field, Class<? extends Annotation> annotationClass,
			String attributeName, T defaultValue) {
		if (field.isAnnotationPresent(annotationClass)) {
			Annotation annotation = field.getDeclaredAnnotation(annotationClass);
			return AnnotationUtil.getValue(annotation, attributeName, defaultValue);
		}
		return defaultValue;
	}

	/**
	 * 获得泛型的实际类型列表
	 * 
	 * @param clazz 类对象
	 * @return 类型列表
	 */
	public static Type[] getParameterizedTypes(@NonNull Class<?> clazz) {
		// 获得带有泛型的父类
		Type[] interfaces = clazz.getGenericInterfaces();
		for (Type type : interfaces) {
//				Type genericSuperclass = class1.getGenericSuperclass();
			// 判断父类是不是参数化的类型，如果是强转成ParameterizedType
			if (type instanceof ParameterizedType) {
				ParameterizedType parameterizedType = (ParameterizedType) type;
				// 获得<>中的实际类型参数
				return parameterizedType.getActualTypeArguments();
			}
		}
		Type genericSuperclass = clazz.getGenericSuperclass();
		// 判断父类是不是参数化的类型，如果是强转成ParameterizedType
		if (genericSuperclass instanceof ParameterizedType) {
			ParameterizedType parameterizedType = (ParameterizedType) genericSuperclass;
			// 获得<>中的实际类型参数
			return parameterizedType.getActualTypeArguments();
		}
		return null;
	}

	/**
	 * 给指定字段设置值
	 * 
	 * @param field 字段对象
	 * @param obj   目标实例
	 * @param value 值
	 */
	public static void setFieldValue(@NonNull Field field, Object obj, Object value) {
		if (value == null) {
			return;
		}
		if (field.getType().isInstance(value)) {
			field.setAccessible(true);
			try {
				field.set(obj, value);
			} catch (IllegalArgumentException | IllegalAccessException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 获取类的所有属性列表
	 * 
	 * @param type 类型
	 * @return 属性列表
	 */
	public static List<AtField> getFields(@NonNull Class<?> type) {
		List<AtField> list = new ArrayList<>(10);
		// 获得当前类的所有属性
		Field[] fields = type.getDeclaredFields();
		for (Field field : fields) {
			list.add(new AtField(type, field));
		}
		// 获得父类
		Class<?> superclass = type.getSuperclass();
		if (superclass != null) {
			// 递归获取父类的属性列表
			list.addAll(getFields(superclass));
		}
		return list;
	}

	/**
	 * 给指定属性设置值
	 * 
	 * @param field 属性对象
	 * @param obj   实例对象
	 * @param value 值
	 */
	public static void setFieldValue(AtField field, Object obj, Object value) {
		setFieldValue(field.getField(), obj, value);
	}

}
