package app.onlinelearningbackend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth

                        // ✅ allow frontend files
                        .requestMatchers(
                                "/",
                                "/login.html",
                                "/dashboard.html",
                                "/style.css",
                                "/app.js",
                                "/favicon.ico"
                        ).permitAll()

                        // ✅ secure backend APIs
                        .requestMatchers("/api/**").authenticated()

                        // ✅ allow everything else
                        .anyRequest().permitAll()
                )
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}
